jQuery("#simulation")
  .on("click", ".s-a73601d3-641c-4e3f-b79b-3779a42aa537 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Ellipse_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a73601d3-641c-4e3f-b79b-3779a42aa537 #s-Ellipse_13 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "72px",
                        "height": "72px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-a73601d3-641c-4e3f-b79b-3779a42aa537 #s-Ellipse_13 .content": {
                      "attributes": {
                        "width": "72px",
                        "height": "72px"
                      }
                    }
                  },{
                    "#s-a73601d3-641c-4e3f-b79b-3779a42aa537 #s-Ellipse_13": {
                      "attributes": {
                        "background-color": "#8EF09E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-a73601d3-641c-4e3f-b79b-3779a42aa537 #s-Ellipse_13": {
                      "attributes-ie": {
                        "-pie-background": "#8EF09E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 300
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a73601d3-641c-4e3f-b79b-3779a42aa537 #s-Ellipse_13 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "72px",
                        "height": "72px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-a73601d3-641c-4e3f-b79b-3779a42aa537 #s-Ellipse_13 .content": {
                      "attributes": {
                        "width": "72px",
                        "height": "72px"
                      }
                    }
                  },{
                    "#s-a73601d3-641c-4e3f-b79b-3779a42aa537 #s-Ellipse_13": {
                      "attributes": {
                        "background-color": "#4CD864",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-a73601d3-641c-4e3f-b79b-3779a42aa537 #s-Ellipse_13": {
                      "attributes-ie": {
                        "-pie-background": "#4CD864",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-a73601d3-641c-4e3f-b79b-3779a42aa537 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Label_32" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });