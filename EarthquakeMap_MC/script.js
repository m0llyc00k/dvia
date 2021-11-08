//////References
//https://earthquake.usgs.gov/earthquakes/feed/v1.0/csv.php
//http://bl.ocks.org/micahstubbs/8e15870eb432a21f0bc4d3d527b2d14f
//https://www.d3-graph-gallery.com/graph/choropleth_basic.html
//http://using-d3js.com/04_05_sequential_scales.html
//http://bl.ocks.org/syntagmatic/e8ccca52559796be775553b467593a9f

let objects

// Loading geojson countries       
d3.json('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson')
  .then((geojson) => {
    // Asynchronous JavaScript waiting for data promise to complete before moving on to .then() 
    if (geojson.features) {
      console.log('Number of features:', geojson.features.length)
      objects = geojson
    }
    //access token
    mapboxgl.accessToken = 'pk.eyJ1IjoicmVhZHlsZXRzZ28iLCJhIjoiY2t0dTR2aGNjMXd3bDJubWgwcWwzcWJzMyJ9.4Qpfc2HBPT14KIrBhX0XGQ'

    // https://www.mapbox.com/mapbox-gl-js/api/#map
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [10, 25], // long, lat
      zoom: 1.55
    })

    /*** load data all earthquakes ***/
    async function loadData() {
      const earthquakeAll = await d3.csv('all_month.csv');

      // add markers to map
      earthquakeAll.forEach(function(d) {

        // create a HTML element for each feature
        var all = document.createElement('div');
        all.className = 'markerAll';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(all)
          .setLngLat([d.longitude, d.latitude])
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h2>' + d.place + '</h2>' + '</br>' + '<h3>' + d.time + '</h3>'))
          .addTo(map);
      });
    }

    loadData();


    // select mapbox container 
    let container = map.getCanvasContainer()

    //add svg
    let svg = d3.select(container).append('svg')

    function projectPoint(lon, lat) {
      let point = map.project(new mapboxgl.LngLat(lon, lat))
      this.stream.point(point.x, point.y)
    }

var myColor = d3.scaleThreshold()
  .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
  .range(d3.schemeGreens[7]);


    let transform = d3.geoTransform({ point: projectPoint })
    let path = d3.geoPath().projection(transform) // https://github.com/d3/d3-3.x-api-reference/blob/master/Geo-Paths.md

    let featureElement = svg
      .selectAll('path')
      .data(geojson.features)
      // d3 data joins https://observablehq.com/@d3/selection-join
      .join('path')
      .attr('d', d3.geoPath().projection(transform))
      .attr('stroke', 'none')
      .attr("fill", function(d) {
        return myColor(d.properties.pop_est)
      })
      // .attr('fill', 'lightgray')
      .attr('fill-opacity', 0.5)
      .on('mouseover', function(d) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement
        console.log(d.srcElement.__data__)
        d3.select(this).attr('fill', 'PowderBlue')
        //we control name
        d3.select('#hover')
          .text(d.srcElement.__data__.properties.name + ' has a population of ' + (d.srcElement.__data__.properties.pop_est / 1000000).toFixed(1) + ' M')
        d3.select('#hover').attr('fill-opacity', 1)
      })
      .on('mouseout', function(d) {
        d3.select(this).attr("fill", function(d) {
          return myColor(d.properties.pop_est)
        })
        d3.select('#hover').attr('fill-opacity', 0)
      })
      .on('mousemove', (d) => {
        // console.log(d3.pointer(d))
        d3.select('#hover')
          .attr('x', () => { return d3.pointer(d)[0] + 20 })
          .attr('y', () => { return d3.pointer(d)[1] + 10 })
      })

    // add hover label text        
    svg.append('text')
      .attr('id', 'hover')

    // sync map views and scales on reset
    let update = () => {
      featureElement.attr('d', path)
    }

    // manage layer visibility during map interactions that change projection
    map.on('viewreset', update)

    map.on('movestart', () => {
      svg.classed('hidden', true)
    })

    map.on('rotate', () => {
      svg.classed('hidden', true)
    })

    map.on('moveend', () => {
      update()
      svg.classed('hidden', false)
    })
  })
  
  /////create a legend////
  
var colorScale1 = d3.scaleSequential(d3.schemeGreens[7])
.domain([100000, 1000000, 10000000, 30000000, 100000000, '500M+'])


continuous("#legend1", colorScale1);

// create continuous color legend
function continuous(selector_id, colorscale) {
  var legendheight = 800,
      legendwidth = 80,
            margin = {top: 500, right: 60, bottom: 10, left: 2};

  var canvas = d3.select(selector_id)
    .style("height", legendheight + "px")
    .style("width", legendwidth + "px")
    .style("position", "relative")
    .append("canvas")
    .attr("height", legendheight - margin.top - margin.bottom)
    .attr("width", 1)
    .style("height", (legendheight - margin.top - margin.bottom) + "px")
    .style("width", (legendwidth - margin.left - margin.right) + "px")
    .style("border", "1px solid #000")
    .style("position", "absolute")
    .style("top", (margin.top) + "px")
    .style("left", (margin.left) + "px")
    .node();

  var ctx = canvas.getContext("2d");

  var legendscale = d3.scaleLinear()
    .range([1, legendheight - margin.top - margin.bottom])
    .domain(colorscale.domain());

  // image data hackery based on http://bl.ocks.org/mbostock/048d21cf747371b11884f75ad896e5a5
  var image = ctx.createImageData(1, legendheight);
  d3.range(legendheight).forEach(function(i) {
    var c = d3.rgb(colorscale(legendscale.invert(i)));
    image.data[4*i] = c.r;
    image.data[4*i + 1] = c.g;
    image.data[4*i + 2] = c.b;
    image.data[4*i + 3] = 255;
  });
  ctx.putImageData(image, 0, 0);

  // A simpler way to do the above, but possibly slower. keep in mind the legend width is stretched because the width attr of the canvas is 1
  // See http://stackoverflow.com/questions/4899799/whats-the-best-way-to-set-a-single-pixel-in-an-html5-canvas
  /*
  d3.range(legendheight).forEach(function(i) {
    ctx.fillStyle = colorscale(legendscale.invert(i));
    ctx.fillRect(0,i,1,1);
  });
  */

  var legendaxis = d3.axisRight()
    .scale(legendscale)
    .tickSize(6)
    .ticks(8);

  var svg = d3.select(selector_id)
    .append("svg")
    .attr("height", (legendheight) + "px")
    .attr("width", (legendwidth) + "px")
    .style("position", "absolute")
    .style("left", "0px")
    .style("top", "0px")

  svg
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + (legendwidth - margin.left - margin.right + 3) + "," + (margin.top) + ")")
    .call(legendaxis);
};