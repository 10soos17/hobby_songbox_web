
//==============set canvas
function set_mainCanvas(reload_brushcolor,reload_btnTextcolor){
  //==============reload center items
  $("#center_animate").css('background-color',reload_brushcolor);
  $("#center_animate").css('color',reload_btnTextcolor);

  $("#center_clear").css('background-color',reload_brushcolor);
  $("#center_clear").css('color',reload_btnTextcolor);

  //==============load canvas
  eventjs.add(window, "load", function() {

    // Saved vector commands (could be compressed).
    var drawing = []
    //{"x":316,"y":190,"beginPath":true,"tool":"brush","strokeStyle":"#d009b6","fillStyle":"#000000","lineWidth":5,"lineCap":"round","lineJoin":"round","lapse":0},

    // Initiate sketch widget.

    sketch = new Sketch({
      element: document.getElementById("areaDraw"),
      path: drawing,
      zoom: 0.75
    },reload_brushcolor);

    // Listen for the resizing the <canvas> area.
    eventjs.add(window, "resize", function() {
      sketch.resize(window.innerWidth, window.innerHeight);
    }).listener();

    // Initiate color picker widget.

    sketch.picker = new Color.Picker({
      size: 225,
      hueWidth: 45,
      color: reload_brushcolor,//"#FF0000",
      eyedropLayer: sketch.layer[1],
      eyedropMouseLayer: sketch.layer[2],
      display: false,
      callback: function(rgba, state, type, self) {
        var w3 = Color.Space(rgba, "RGBA>W3");
        sketch.style.strokeStyle = w3;
      }
    });
  });

  /// Prevent native scrolling in iOS.
  eventjs.add(document.body, 'touchmove', eventjs.prevent);

  /// Prevent right-click on desktops.
  eventjs.add(document.body, 'contextmenu', eventjs.prevent);
}
