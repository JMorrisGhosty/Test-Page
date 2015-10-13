/**
 * Created by Jaren on 10/12/2015.
 */
/* Load staging tags for resize test */
    <!-- bottom-right tag -->
    window.setTimeout(function() {
        var el = document.getElementById('bottomright');
        var id = 'bottomright';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = "//staging2info.ghosteryenterprise.com/ftp/staging/durly.js?;ad_w=" + el.offsetWidth + ";ad_h=" + el.offsetHeight + ";coid=242;nid=32275;container=" + id;
        el.appendChild(s);
    }, 250);

    <!-- bottom-left tag -->
    window.setTimeout(function() {
        var el = document.getElementById('bottomleft');
        var id = 'bottomleft';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = "//staging2info.ghosteryenterprise.com/ftp/staging/durly.js?;ad_w=" + el.offsetWidth + ";ad_h=" + el.offsetHeight + ";coid=242;nid=32277;container=" + id;
        el.appendChild(s);
    }, 250);


    <!-- top-right tag -->
    window.setTimeout(function() {
        var el = document.getElementById('topright');
        var id = 'topright';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = "//staging2info.ghosteryenterprise.com/ftp/staging/durly.js?;ad_w=" + el.offsetWidth + ";ad_h=" + el.offsetHeight + ";coid=242;nid=32276;container=" + id;
        el.appendChild(s);
    }, 250);

    <!-- top-left tag -->
    window.setTimeout(function() {
        var el = document.getElementById('topleft');
        var id = 'topleft';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = "//staging2info.ghosteryenterprise.com/ftp/staging/durly.js?;ad_w=" + el.offsetWidth + ";ad_h=" + el.offsetHeight + ";coid=242;nid=1752;container=" + id;
        el.appendChild(s);
    }, 250);

/* Event listener for Test Drive a tag - sets the BG color on selected */

document.getElementById('stagingEnvironment').addEventListener("click", function(){
    <!--Set the color showing its set-->
    document.getElementById('stagingEnvironment').style.backgroundColor = "#337AB7";
    document.getElementById('productionEnvironment').style.backgroundColor = "#fff";
});
document.getElementById('productionEnvironment').addEventListener("click", function(){
    <!--Set the color showing its set-->
    document.getElementById('productionEnvironment').style.backgroundColor = "#337AB7";
    document.getElementById('stagingEnvironment').style.backgroundColor = "#fff";
});

/* Check the preview window size */
document.getElementById('bannerPreview').onclick = function() {
    sessionStorage.setItem('previewSize_w', 320);
    sessionStorage.setItem('previewSize_h', 50);
};
document.getElementById('mediumPreview').onclick = function() {
    sessionStorage.setItem('previewSize_w', 300);
    sessionStorage.setItem('previewSize_h', 250);
};
document.getElementById('skyscraperPreview').onclick = function() {
    sessionStorage.setItem('previewSize_w', 160);
    sessionStorage.setItem('previewSize_h', 600);
};

/* Event listener for Test Drive a tag - NID and CID entries & Environment */

document.getElementById('getPreview').addEventListener("click", function() {
    <!-- Value Checking / Printing -->
    /*console.log('staging color ' + stagingEnvironment.style.backgroundColor);
     console.log('production color ' + productionEnvironment.style.backgroundColor);

     var cidEntry = document.getElementById('cidEntry').value;
     var nidEntry = document.getElementById('nidEntry').value;
     console.log('Your CID is ' + cidEntry);
     console.log('Your NID is ' + nidEntry);
     console.log(document.getElementById('stagingEnvironment').style.backgroundColor);
     console.log(document.getElementById('productionEnvironment').style.backgroundColor);*/

    <!-- Grab CID & NID -->
    var cidEntry = document.getElementById('cidEntry').value;
    var nidEntry = document.getElementById('nidEntry').value;
    sessionStorage.setItem('nidEntry', nidEntry);
    sessionStorage.setItem('cidEntry', cidEntry);

    var previewSize_w = sessionStorage.getItem('previewSize_w');
    var previewSize_h = sessionStorage.getItem('previewSize_h');

    <!-- check which environment is selected and write previewUrl accordingly -->
    if (document.getElementById('productionEnvironment').style.backgroundColor == "rgb(51, 122, 183)") {
        //var previewUrl = ('//c.betrad.com/durly.js?;ad_w=160;ad_h=600;coid=' + cidEntry + ';nid=' + nidEntry + ';conatiner=tag1;');
        sessionStorage.setItem('previewUrl', '//c.betrad.com/durly.js?;ad_w=' + previewSize_w + ';ad_h=' + previewSize_h + ';coid=' + cidEntry + ';nid=' + nidEntry + ';');
    }
    else if (document.getElementById('stagingEnvironment').style.backgroundColor == "rgb(51, 122, 183)") {
        //var previewUrl = ('//staging2info.ghosteryenterprise.com/ftp/staging/durly.js?;ad_w=160;ad_h=600;coid=' + cidEntry + ';nid=' + nidEntry + ';container=tag1;');
        sessionStorage.setItem('previewUrl', '//staging2info.ghosteryenterprise.com/ftp/staging/durly.js?;ad_w=' + previewSize_w + ';ad_h=' + previewSize_h + ';coid=' + cidEntry + ';nid=' + nidEntry + ';');
    }
    else {
        alert('Please choose an environment');
    }

    <!-- display the preview div -->
    document.getElementById('previewDiv').style.display = 'inherit';

    <!-- Write the iframe out to the previewDiv -->
    var e = document.getElementById('previewDivWell');
    previewDivWell.innerHTML = '<h4>Preview</h4> size: ' + previewSize_w + 'x' + previewSize_h + '<object type="text/html" data="previewHTML.html" width="340" height="290" style="scrolling: no;"></object>';

    //makeFrame();
    //previewDiv.contentDocument.write('jaren was here');
});
