function showMouseLegend(me, id) {
    me.style.boxShadow = "0 0 15px blue";
    var divMouse = document.getElementById("mouse-legend-"+id);
    var divBox   = document.getElementById("box-legend-"+id);
    divMouse.style.display = "";
    divBox.style.cursor = 'pointer';
    divBox.style.boxShadow = "0 0 15px blue"
}

function hideMouseLegend(me, id) {
    me.style.boxShadow = "";
    var div = document.getElementById("mouse-legend-"+id);
    var divBox   = document.getElementById("box-legend-"+id);
    div.style.display = "none";
    divBox.style.boxShadow = ""
}

function goToAnchor(me, anchor) {
    window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#"+anchor
    var divAwsServices = document.getElementById("aws_services");

    if ( anchor != "compute" ) {
        // Compensante Top for ToolBar Height
        var compensante = false;
        var winHeight   = window.outerHeight;
        if ( winHeight <= 1040) {
            compensante = true;
        }

        if (compensante == true) {
            var valueCompensate = 20;
            if (winHeight <= 1000) {
                valueCompensate = 70;
            } else  {
                valueCompensate = 45;
            }
            
            newTop = divAwsServices.scrollTop - valueCompensate;
            divAwsServices.scrollTo({top: newTop, behavior: 'smooth'});
        }
    } else {
        divAwsServices.scrollTo({top: 0, behavior: 'smooth'});
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}