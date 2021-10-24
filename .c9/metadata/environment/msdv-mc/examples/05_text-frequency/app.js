{"filter":false,"title":"app.js","tooltip":"/msdv-mc/examples/05_text-frequency/app.js","undoManager":{"mark":98,"position":98,"stack":[[{"start":{"row":2,"column":44},"end":{"row":2,"column":54},"action":"remove","lines":["Nixon_1974"],"id":2},{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["E"]},{"start":{"row":2,"column":45},"end":{"row":2,"column":46},"action":"insert","lines":["i"]},{"start":{"row":2,"column":46},"end":{"row":2,"column":47},"action":"insert","lines":["s"]},{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"remove","lines":["n"],"id":3}],[{"start":{"row":2,"column":47},"end":{"row":2,"column":48},"action":"insert","lines":["e"],"id":4},{"start":{"row":2,"column":48},"end":{"row":2,"column":49},"action":"insert","lines":["n"]},{"start":{"row":2,"column":49},"end":{"row":2,"column":50},"action":"insert","lines":["h"]},{"start":{"row":2,"column":50},"end":{"row":2,"column":51},"action":"insert","lines":["o"]},{"start":{"row":2,"column":51},"end":{"row":2,"column":52},"action":"insert","lines":["w"]},{"start":{"row":2,"column":52},"end":{"row":2,"column":53},"action":"insert","lines":["e"]},{"start":{"row":2,"column":53},"end":{"row":2,"column":54},"action":"insert","lines":["r"]}],[{"start":{"row":2,"column":54},"end":{"row":2,"column":55},"action":"insert","lines":["_"],"id":5},{"start":{"row":2,"column":55},"end":{"row":2,"column":56},"action":"insert","lines":["1"]},{"start":{"row":2,"column":56},"end":{"row":2,"column":57},"action":"insert","lines":["9"]},{"start":{"row":2,"column":57},"end":{"row":2,"column":58},"action":"insert","lines":["5"]},{"start":{"row":2,"column":58},"end":{"row":2,"column":59},"action":"insert","lines":["6"]}],[{"start":{"row":39,"column":3},"end":{"row":84,"column":0},"action":"remove","lines":[" svg","        .attr('viewBox', [0,0,1000,300])","","    const g = svg","        .selectAll('g')","        .data(Array.from(d3word_rollup))","        .join('g')","","    const x_scale = d3","        .scaleBand()","        .domain(Array.from(d3word_rollup).sort((a,b)=>d3.descending(a[1], b[1])).map(d => d[0]))","        .range([0, 6000])","    const y_scale = d3.scaleLinear()","        .domain([0,d3.max(d3word_rollup, d => d[1])])","        .range([0, 300])","","    g ","        .append('rect')","        .attr('x', d => x_scale(d[0]))","        .attr('height', d => y_scale(d[1]))","        .attr('y', d => y_scale.range()[1] - y_scale(d[1]) )","        .attr('width', x_scale.bandwidth)","","    const tags = d3.create('div')","","    const font_scale = d3","        .scaleLinear()","        .domain([0,d3.max(d3word_rollup, d => d[1])])","        .range([0.4, 5])","","    tags","        .style('display', 'flex')","        .style('flex-wrap', 'wrap')","        .style('align-items', 'center')","","    tags ","        .selectAll('span')","        .data(Array.from(d3word_rollup))","        .join('span')","        .text(d => d[0])","        .style('padding', '1em')","        .style('font-size', d => font_scale(d[1]) + 'rem')","","    app.append(()=>svg.node())","    app.append(()=>tags.node())",""],"id":6}],[{"start":{"row":26,"column":9},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":27,"column":0},"end":{"row":27,"column":8},"action":"insert","lines":["        "]},{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["s"]},{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["o"]},{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["r"]},{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"remove","lines":["t"],"id":8},{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"remove","lines":["r"]},{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"remove","lines":["o"]},{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"remove","lines":["s"]}],[{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["w"],"id":9},{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["o"]},{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["r"]},{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"insert","lines":["d"]},{"start":{"row":27,"column":12},"end":{"row":27,"column":13},"action":"insert","lines":["."]},{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"insert","lines":["s"]},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["o"]},{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["r"]},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["t"]}],[{"start":{"row":27,"column":17},"end":{"row":27,"column":19},"action":"insert","lines":["()"],"id":10}],[{"start":{"row":27,"column":18},"end":{"row":27,"column":19},"action":"remove","lines":[")"],"id":11},{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"remove","lines":["("]},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"remove","lines":["t"]},{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"remove","lines":["r"]},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"remove","lines":["o"]},{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"remove","lines":["s"]},{"start":{"row":27,"column":12},"end":{"row":27,"column":13},"action":"remove","lines":["."]},{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"remove","lines":["d"]},{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"remove","lines":["r"]},{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"remove","lines":["o"]},{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"remove","lines":["w"]}],[{"start":{"row":27,"column":4},"end":{"row":27,"column":8},"action":"remove","lines":["    "],"id":12}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"remove","lines":["    "],"id":13},{"start":{"row":26,"column":9},"end":{"row":27,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":32,"column":49},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":33,"column":0},"end":{"row":33,"column":8},"action":"insert","lines":["        "]},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"insert","lines":["."]},{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["s"]},{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":["o"]},{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"insert","lines":["r"]},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["t"]}],[{"start":{"row":33,"column":13},"end":{"row":33,"column":15},"action":"insert","lines":["()"],"id":15}],[{"start":{"row":38,"column":33},"end":{"row":38,"column":34},"action":"insert","lines":["w"],"id":16},{"start":{"row":38,"column":34},"end":{"row":38,"column":35},"action":"insert","lines":["o"]},{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"insert","lines":["r"]}],[{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"remove","lines":["r"],"id":17},{"start":{"row":38,"column":34},"end":{"row":38,"column":35},"action":"remove","lines":["o"]},{"start":{"row":38,"column":33},"end":{"row":38,"column":34},"action":"remove","lines":["w"]}],[{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"insert","lines":["w"],"id":18},{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["o"]},{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["r"]},{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"insert","lines":["a"],"id":19},{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["."]}],[{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":[","],"id":20}],[{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":[" "],"id":21},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["b"]},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["."]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["w"]},{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"insert","lines":["o"]},{"start":{"row":33,"column":26},"end":{"row":33,"column":27},"action":"insert","lines":["r"]},{"start":{"row":33,"column":27},"end":{"row":33,"column":28},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"remove","lines":["        .sort(a.word, b.word)",""],"id":22}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":7},"action":"remove","lines":["// "],"id":23}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":7},"action":"insert","lines":["// "],"id":24}],[{"start":{"row":32,"column":49},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":25},{"start":{"row":33,"column":0},"end":{"row":33,"column":8},"action":"insert","lines":["        "]},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"insert","lines":["."]}],[{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["s"],"id":26},{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":["o"]},{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"insert","lines":["r"]},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["t"]}],[{"start":{"row":33,"column":13},"end":{"row":33,"column":15},"action":"insert","lines":["()"],"id":27}],[{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"insert","lines":["d"],"id":28},{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["3"]},{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["."]},{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["a"]},{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["s"]},{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["c"]},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["e"]},{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["n"]}],[{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["d"],"id":29},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["i"]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["n"]},{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"insert","lines":["g"]}],[{"start":{"row":33,"column":13},"end":{"row":33,"column":14},"action":"remove","lines":["("],"id":30},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"remove","lines":["t"]},{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"remove","lines":["r"]},{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"remove","lines":["o"]},{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"remove","lines":["s"]},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"remove","lines":["."]}],[{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"remove","lines":[")"],"id":31}],[{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"remove","lines":["3"],"id":32},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"remove","lines":["d"]}],[{"start":{"row":33,"column":18},"end":{"row":33,"column":20},"action":"insert","lines":["()"],"id":33}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["w"],"id":34}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"remove","lines":["w"],"id":35},{"start":{"row":33,"column":19},"end":{"row":33,"column":28},"action":"insert","lines":["word_bank"]}],[{"start":{"row":33,"column":27},"end":{"row":33,"column":28},"action":"remove","lines":["k"],"id":36},{"start":{"row":33,"column":26},"end":{"row":33,"column":27},"action":"remove","lines":["n"]},{"start":{"row":33,"column":25},"end":{"row":33,"column":26},"action":"remove","lines":["a"]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"remove","lines":["b"]},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"remove","lines":["_"]},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"remove","lines":["d"]},{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"remove","lines":["r"]},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"remove","lines":["o"]},{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"remove","lines":["w"]}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["s"],"id":37}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"remove","lines":["s"],"id":38}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["d"],"id":39},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["3"]}],[{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["w"],"id":40},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["o"]},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["r"]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":25},"action":"remove","lines":["d3word"],"id":41},{"start":{"row":33,"column":19},"end":{"row":33,"column":32},"action":"insert","lines":["d3word_rollup"]}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":32},"action":"remove","lines":["d3word_rollup"],"id":42},{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["w"]},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["o"]},{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["r"]},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":23},"action":"remove","lines":["word"],"id":43},{"start":{"row":33,"column":19},"end":{"row":33,"column":23},"action":"insert","lines":["word"]}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":23},"action":"remove","lines":["word"],"id":44}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["w"],"id":45},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["o"]},{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["r"]},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["d"]}],[{"start":{"row":33,"column":19},"end":{"row":33,"column":23},"action":"remove","lines":["word"],"id":46},{"start":{"row":33,"column":19},"end":{"row":33,"column":29},"action":"insert","lines":["word_count"]}],[{"start":{"row":35,"column":29},"end":{"row":35,"column":30},"action":"insert","lines":["."],"id":47},{"start":{"row":35,"column":30},"end":{"row":35,"column":31},"action":"insert","lines":["s"]},{"start":{"row":35,"column":31},"end":{"row":35,"column":32},"action":"insert","lines":["o"]},{"start":{"row":35,"column":32},"end":{"row":35,"column":33},"action":"insert","lines":["r"]},{"start":{"row":35,"column":33},"end":{"row":35,"column":34},"action":"insert","lines":["t"]}],[{"start":{"row":35,"column":34},"end":{"row":35,"column":36},"action":"insert","lines":["()"],"id":48}],[{"start":{"row":35,"column":35},"end":{"row":35,"column":36},"action":"insert","lines":["d"],"id":49},{"start":{"row":35,"column":36},"end":{"row":35,"column":37},"action":"insert","lines":["3"]},{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"insert","lines":["."]},{"start":{"row":35,"column":38},"end":{"row":35,"column":39},"action":"insert","lines":["a"]},{"start":{"row":35,"column":39},"end":{"row":35,"column":40},"action":"insert","lines":["s"]},{"start":{"row":35,"column":40},"end":{"row":35,"column":41},"action":"insert","lines":["c"]},{"start":{"row":35,"column":41},"end":{"row":35,"column":42},"action":"insert","lines":["e"]},{"start":{"row":35,"column":42},"end":{"row":35,"column":43},"action":"insert","lines":["n"]},{"start":{"row":35,"column":43},"end":{"row":35,"column":44},"action":"insert","lines":["t"]}],[{"start":{"row":35,"column":43},"end":{"row":35,"column":44},"action":"remove","lines":["t"],"id":50}],[{"start":{"row":35,"column":43},"end":{"row":35,"column":44},"action":"insert","lines":["d"],"id":51},{"start":{"row":35,"column":44},"end":{"row":35,"column":45},"action":"insert","lines":["i"]},{"start":{"row":35,"column":45},"end":{"row":35,"column":46},"action":"insert","lines":["n"]},{"start":{"row":35,"column":46},"end":{"row":35,"column":47},"action":"insert","lines":["g"]}],[{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"remove","lines":["        .ascending(word_count)",""],"id":52}],[{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":53}],[{"start":{"row":35,"column":36},"end":{"row":35,"column":47},"action":"remove","lines":["3.ascending"],"id":54},{"start":{"row":35,"column":35},"end":{"row":35,"column":36},"action":"remove","lines":["d"]}],[{"start":{"row":35,"column":35},"end":{"row":35,"column":48},"action":"insert","lines":["d3word_rollup"],"id":55}],[{"start":{"row":35,"column":47},"end":{"row":35,"column":48},"action":"remove","lines":["p"],"id":56},{"start":{"row":35,"column":46},"end":{"row":35,"column":47},"action":"remove","lines":["u"]},{"start":{"row":35,"column":45},"end":{"row":35,"column":46},"action":"remove","lines":["l"]},{"start":{"row":35,"column":44},"end":{"row":35,"column":45},"action":"remove","lines":["l"]},{"start":{"row":35,"column":43},"end":{"row":35,"column":44},"action":"remove","lines":["o"]},{"start":{"row":35,"column":42},"end":{"row":35,"column":43},"action":"remove","lines":["r"]},{"start":{"row":35,"column":41},"end":{"row":35,"column":42},"action":"remove","lines":["_"]},{"start":{"row":35,"column":40},"end":{"row":35,"column":41},"action":"remove","lines":["d"]},{"start":{"row":35,"column":39},"end":{"row":35,"column":40},"action":"remove","lines":["r"]},{"start":{"row":35,"column":38},"end":{"row":35,"column":39},"action":"remove","lines":["o"]},{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"remove","lines":["w"]},{"start":{"row":35,"column":36},"end":{"row":35,"column":37},"action":"remove","lines":["3"]}],[{"start":{"row":35,"column":35},"end":{"row":35,"column":36},"action":"remove","lines":["d"],"id":57}],[{"start":{"row":35,"column":35},"end":{"row":35,"column":36},"action":"insert","lines":["w"],"id":58},{"start":{"row":35,"column":36},"end":{"row":35,"column":37},"action":"insert","lines":["o"]},{"start":{"row":35,"column":37},"end":{"row":35,"column":38},"action":"insert","lines":["r"]},{"start":{"row":35,"column":38},"end":{"row":35,"column":39},"action":"insert","lines":["d"]}],[{"start":{"row":35,"column":35},"end":{"row":35,"column":39},"action":"remove","lines":["word"],"id":59},{"start":{"row":35,"column":35},"end":{"row":35,"column":44},"action":"insert","lines":["word_bank"]}],[{"start":{"row":35,"column":36},"end":{"row":35,"column":44},"action":"remove","lines":["ord_bank"],"id":60},{"start":{"row":35,"column":35},"end":{"row":35,"column":36},"action":"remove","lines":["w"]}],[{"start":{"row":35,"column":35},"end":{"row":35,"column":36},"action":"remove","lines":[")"],"id":61},{"start":{"row":35,"column":34},"end":{"row":35,"column":36},"action":"remove","lines":["()"]}],[{"start":{"row":35,"column":34},"end":{"row":35,"column":35},"action":"insert","lines":[")"],"id":62}],[{"start":{"row":35,"column":33},"end":{"row":35,"column":34},"action":"remove","lines":["t"],"id":63},{"start":{"row":35,"column":32},"end":{"row":35,"column":33},"action":"remove","lines":["r"]},{"start":{"row":35,"column":31},"end":{"row":35,"column":32},"action":"remove","lines":["o"]},{"start":{"row":35,"column":30},"end":{"row":35,"column":31},"action":"remove","lines":["s"]},{"start":{"row":35,"column":29},"end":{"row":35,"column":30},"action":"remove","lines":["."]}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":64},{"start":{"row":35,"column":0},"end":{"row":36,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "],"id":65}],[{"start":{"row":35,"column":4},"end":{"row":35,"column":5},"action":"insert","lines":["d"],"id":66},{"start":{"row":35,"column":5},"end":{"row":35,"column":6},"action":"insert","lines":["3"]},{"start":{"row":35,"column":6},"end":{"row":35,"column":7},"action":"insert","lines":["w"]},{"start":{"row":35,"column":7},"end":{"row":35,"column":8},"action":"insert","lines":["o"]},{"start":{"row":35,"column":8},"end":{"row":35,"column":9},"action":"insert","lines":["r"]},{"start":{"row":35,"column":9},"end":{"row":35,"column":10},"action":"insert","lines":["d"]}],[{"start":{"row":35,"column":4},"end":{"row":35,"column":10},"action":"remove","lines":["d3word"],"id":67},{"start":{"row":35,"column":4},"end":{"row":35,"column":17},"action":"insert","lines":["d3word_rollup"]}],[{"start":{"row":35,"column":17},"end":{"row":35,"column":18},"action":"insert","lines":["."],"id":68},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["s"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["o"]},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["r"]},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":["t"]}],[{"start":{"row":35,"column":22},"end":{"row":35,"column":24},"action":"insert","lines":["()"],"id":69}],[{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"insert","lines":[";"],"id":70}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":71}],[{"start":{"row":35,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["numbers.sort(function(a, b) {","  return a - b;","});"],"id":72}],[{"start":{"row":38,"column":23},"end":{"row":38,"column":24},"action":"insert","lines":["f"],"id":73},{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"insert","lines":["u"]},{"start":{"row":38,"column":25},"end":{"row":38,"column":26},"action":"insert","lines":["c"]}],[{"start":{"row":38,"column":25},"end":{"row":38,"column":26},"action":"remove","lines":["c"],"id":74}],[{"start":{"row":38,"column":25},"end":{"row":38,"column":26},"action":"insert","lines":["n"],"id":75},{"start":{"row":38,"column":26},"end":{"row":38,"column":27},"action":"insert","lines":["c"]},{"start":{"row":38,"column":27},"end":{"row":38,"column":28},"action":"insert","lines":["t"]},{"start":{"row":38,"column":28},"end":{"row":38,"column":29},"action":"insert","lines":["i"]},{"start":{"row":38,"column":29},"end":{"row":38,"column":30},"action":"insert","lines":["o"]},{"start":{"row":38,"column":30},"end":{"row":38,"column":31},"action":"insert","lines":["n"]}],[{"start":{"row":38,"column":31},"end":{"row":38,"column":33},"action":"insert","lines":["()"],"id":76}],[{"start":{"row":38,"column":32},"end":{"row":38,"column":33},"action":"insert","lines":["a"],"id":77},{"start":{"row":38,"column":33},"end":{"row":38,"column":34},"action":"insert","lines":[","]}],[{"start":{"row":38,"column":34},"end":{"row":38,"column":35},"action":"insert","lines":[" "],"id":78},{"start":{"row":38,"column":35},"end":{"row":38,"column":36},"action":"insert","lines":["b"]}],[{"start":{"row":38,"column":37},"end":{"row":38,"column":38},"action":"insert","lines":[" "],"id":79}],[{"start":{"row":38,"column":38},"end":{"row":38,"column":40},"action":"insert","lines":["{}"],"id":80}],[{"start":{"row":38,"column":39},"end":{"row":40,"column":4},"action":"insert","lines":["","        ","    "],"id":81}],[{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["r"],"id":82},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["e"]},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["u"]}],[{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"remove","lines":["u"],"id":83}],[{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["t"],"id":84},{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["u"]},{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":["r"]},{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":[" "],"id":85},{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["a"]}],[{"start":{"row":39,"column":16},"end":{"row":39,"column":17},"action":"insert","lines":[" "],"id":86},{"start":{"row":39,"column":17},"end":{"row":39,"column":18},"action":"insert","lines":["-"]}],[{"start":{"row":39,"column":18},"end":{"row":39,"column":19},"action":"insert","lines":[" "],"id":87},{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["b"]}],[{"start":{"row":39,"column":20},"end":{"row":39,"column":21},"action":"insert","lines":[";"],"id":88}],[{"start":{"row":35,"column":0},"end":{"row":37,"column":3},"action":"remove","lines":["numbers.sort(function(a, b) {","  return a - b;","});"],"id":89}],[{"start":{"row":33,"column":0},"end":{"row":34,"column":0},"action":"remove","lines":["",""],"id":90}],[{"start":{"row":35,"column":0},"end":{"row":37,"column":7},"action":"remove","lines":["    d3word_rollup.sort(function(a, b) {","        return a - b;","    });"],"id":91},{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":34,"column":0},"end":{"row":40,"column":1},"action":"insert","lines":["keys.sort(compare);","","function compare(a,b) {","    var countA = counts[a];","    var countB = counts[b];","    return countA - countB;","}"],"id":92}],[{"start":{"row":17,"column":6},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":93},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":18,"column":4},"end":{"row":19,"column":0},"action":"insert","lines":["",""]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":19,"column":4},"end":{"row":19,"column":5},"action":"insert","lines":["v"]},{"start":{"row":19,"column":5},"end":{"row":19,"column":6},"action":"insert","lines":["a"]},{"start":{"row":19,"column":6},"end":{"row":19,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":19,"column":7},"end":{"row":19,"column":8},"action":"insert","lines":[" "],"id":94},{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":["k"]},{"start":{"row":19,"column":9},"end":{"row":19,"column":10},"action":"insert","lines":["e"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["y"]},{"start":{"row":19,"column":11},"end":{"row":19,"column":12},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"insert","lines":[" "],"id":95},{"start":{"row":19,"column":13},"end":{"row":19,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":19,"column":14},"end":{"row":19,"column":15},"action":"insert","lines":[" "],"id":96}],[{"start":{"row":19,"column":15},"end":{"row":19,"column":17},"action":"insert","lines":["[]"],"id":97}],[{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":[";"],"id":98}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["// "],"id":99},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["// "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"insert","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"insert","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"remove","lines":["// "],"id":100},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"remove","lines":["// "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":3},"action":"remove","lines":["// "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"remove","lines":["// "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"remove","lines":["// "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"remove","lines":["// "]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":37,"column":0},"end":{"row":37,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1635010322265,"hash":"b62cbf2aed7d81f41257d350cacb13d327c4156b"}