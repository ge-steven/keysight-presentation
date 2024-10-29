let rdp_cy1 = cytoscape({
  container: document.getElementById('rdp-graph1-cy'),
  elements: rdp_data.elements,
  style: [
    {
      selector: 'node',
      style: {
        'label': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center',
        'font-family': "Helvetica,Arial,sans-serif",
        'background-color': 'data(backgroundColor1)',
        'border-width': 4,
        'border-color': 'black',
        'width' : 40,
        'height': 40
      }
    },
    {
      selector: 'edge',
      style: {
        'control-point-distances': 0,
        'control-point-weights': 0.5,
        'edge-distances': 'node-position',
        'curve-style': 'unbundled-bezier'
      }
    },
    {
        selector: 'node.selected',
        style: {
            'background-color': 'green'
        }
    },
    {
        selector: 'node.highlight',
        style: {
            'background-color': 'orange'
        }
    },
    {
        selector: 'node.highlightRight',
        style: {
            'background-color': 'blue'
        }
    },
    {
        selector: 'node.highlightLeft',
        style: {
            'background-color': 'red'
        }
    },
    {
        selector: 'node.semitransp',
        style:{ 'opacity': '0.5' }
    },
    {
        selector: 'edge.highlight',
        style: { 'mid-target-arrow-color': '#FFF', lineColor: 'blue' }
    },
    {
        selector: 'edge.semitransp',
        style:{ 'opacity': '0.2' }
    }
  ],
  layout: {
    name: 'preset',
    fit: true,
    positions: function(node){return node._private.data.position1}
  }
});

rdp_cy1.on('mouseover', 'node', function(e){
  var sel = e.target;
  highlight(sel, rdp_cy1);
});
rdp_cy1.on('mouseout', 'node', function(e){
  dehighlight(rdp_cy1);
});

rdp_cy1.on('mouseover', 'edge', function(e){
  var sel = e.target;
  sel.addClass('highlight');
});
rdp_cy1.on('mouseout', 'edge', function(e){
  var sel = e.target;
  sel.removeClass('highlight');
});

var cytoEventHandler = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'rdp-graph1-cy') {
    rdp_cy1.resize();
    rdp_cy1.fit();
    layoutanimation(1, rdp_cy1);
  }
  else if (event.fragment.id == 'graph12-cy') {
    document.getElementById("redstud").style.color = 'red';
    document.getElementById("bluestud").style.color = 'blue';
  }
  else if (event.fragment.id == 'graph13-cy') {
    for(let i = 0; i < 8; i++) {
      rdp_cy1.nodes()[i].animate({
        css: {
          'background-color': 'blue',
          'color': 'white'
          }
        },{
        duration: 200
        }
      );
    }
    for(let i = 8; i < 12; i++) {
      rdp_cy1.nodes()[i].animate({
        css: {
          'background-color': 'red',
          }
        },{
        duration: 200
        }
      );
    }
  }
  else if (event.fragment.id == 'graph14-cy') {
    layoutanimation(2, rdp_cy1)
    .pon('layoutstop')
    .then(async function(event) {
      await sleep(200);
      layoutanimation(3, rdp_cy1)
      .pon('layoutstop')
      .then( async function(event) {
        await sleep(200);
        layoutanimation(4, rdp_cy1)
        .pon('layoutstop')
        .then(async function(event) {
          await sleep(200);
          layoutanimation(5, rdp_cy1)})
      })
    });
  }
  else if (event.fragment.id == 'graph15-cy') {
    highlight(rdp_cy1.elements()[10], rdp_cy1);
  }
  else if (event.fragment.id == 'graph16-cy') {
    layoutanimation(6, rdp_cy1)
  }
  else if (event.fragment.id == 'graph17-cy') {
    dehighlight(rdp_cy1);
    highlight(rdp_cy1.elements()[0], rdp_cy1);
  }
  else if (event.fragment.id == 'graph18-cy') {
    layoutanimation(7, rdp_cy1)
  }
}

Reveal.addEventListener('fragmentshown', cytoEventHandler);

var cytoEventHandlerBack = function(event) {
  if(event.fragment.id === undefined) {

  }
  else if (event.fragment.id == 'rdp-graph1-cy') {
    rdp_cy1.resize();
    rdp_cy1.fit();
    layoutanimation(1, rdp_cy1);
  }
  else if (event.fragment.id == 'graph12-cy') {
    document.getElementById("redstud").style.color = 'black';
    document.getElementById("bluestud").style.color = 'black';
  }
  else if (event.fragment.id == 'graph13-cy') {
    for(let i = 0; i < 12; i++) {
      rdp_cy1.nodes()[i].animate({
        css: {
          'background-color': 'white',
          'color': 'black'
          }
        },{
        duration: 100
        }
      );
    }
  }
  else if (event.fragment.id == 'graph14-cy') {
    layoutanimation(1, rdp_cy1);
  }
  else if (event.fragment.id == 'graph15-cy') {
    dehighlight(rdp_cy1);
  }
  else if (event.fragment.id == 'graph16-cy') {
    layoutanimation(5, rdp_cy1)
  }
  else if (event.fragment.id == 'graph17-cy') {
    dehighlight(rdp_cy1);
    highlight(rdp_cy1.elements()[10], rdp_cy1);
  }
  else if (event.fragment.id == 'graph18-cy') {
    layoutanimation(6, rdp_cy1)
  }
}


Reveal.addEventListener('fragmenthidden', cytoEventHandlerBack);
