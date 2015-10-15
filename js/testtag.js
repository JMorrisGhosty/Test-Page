/**
 * Created by Jaren on 10/13/2015.
 */
/* Declare vars for hoisting */
var iconPosition;
var iconDisplayStyle;
var overlayDisplay;
var iconDelay;
var previewWidth;
var previewHeight;

/* Event listener for Test Drive a tag - sets the BG color on selected */
    /* Icon Position  */
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

/* Event listeners for Test Drive Tag Settings */
document.getElementById('iconP-btm-left').addEventListener("click", function(){
    document.getElementById('iconP-btm-left').style.backgroundColor = "#337AB7";
    document.getElementById('iconP-btm-right').style.backgroundColor = "#fff";
    document.getElementById('iconP-top-left').style.backgroundColor = "#fff";
    document.getElementById('iconP-top-right').style.backgroundColor = "#fff";
    iconPosition = 'bottom_left';
    console.log(iconPosition);
});

document.getElementById('iconP-btm-right').addEventListener("click", function(){
    document.getElementById('iconP-btm-left').style.backgroundColor = "#fff";
    document.getElementById('iconP-btm-right').style.backgroundColor = "#337AB7";
    document.getElementById('iconP-top-left').style.backgroundColor = "#fff";
    document.getElementById('iconP-top-right').style.backgroundColor = "#fff";
    iconPosition = 'bottom_right';
    console.log(iconPosition);
});

document.getElementById('iconP-top-left').addEventListener("click", function(){
    document.getElementById('iconP-btm-left').style.backgroundColor = "#fff";
    document.getElementById('iconP-btm-right').style.backgroundColor = "#fff";
    document.getElementById('iconP-top-left').style.backgroundColor = "#337AB7";
    document.getElementById('iconP-top-right').style.backgroundColor = "#fff";
    iconPosition = 'top_left';
    console.log(iconPosition);
});

document.getElementById('iconP-top-right').addEventListener("click", function(){
    document.getElementById('iconP-btm-left').style.backgroundColor = "#fff";
    document.getElementById('iconP-btm-right').style.backgroundColor = "#fff";
    document.getElementById('iconP-top-left').style.backgroundColor = "#fff";
    document.getElementById('iconP-top-right').style.backgroundColor = "#337AB7";
    iconPosition = 'top_right';
    console.log(iconPosition);
});
    /* Icon Display Style */
document.getElementById('iconDisplay-normal').addEventListener("click", function(){
    document.getElementById('iconDisplay-normal').style.backgroundColor = "#337AB7";
    document.getElementById('iconDisplay-expandableIcon').style.backgroundColor = "#fff";
    document.getElementById('iconDisplay-iconOnly').style.backgroundColor = "#fff";
    document.getElementById('iconStyleAlert').style.display = "block";
    iconDisplayStyle = "normal icon";
    console.log(iconDisplayStyle);
});

document.getElementById('iconDisplay-expandableIcon').addEventListener("click", function(){
    document.getElementById('iconDisplay-normal').style.backgroundColor = "#fff";
    document.getElementById('iconDisplay-expandableIcon').style.backgroundColor = "#337AB7";
    document.getElementById('iconDisplay-iconOnly').style.backgroundColor = "#fff";
    document.getElementById('iconStyleAlert').style.display = "none";
    iconDisplayStyle = "expandable_icon";
    console.log(iconDisplayStyle);
});

document.getElementById('iconDisplay-iconOnly').addEventListener("click", function(){
    document.getElementById('iconDisplay-normal').style.backgroundColor = "#fff";
    document.getElementById('iconDisplay-expandableIcon').style.backgroundColor = "#fff";
    document.getElementById('iconDisplay-iconOnly').style.backgroundColor = "#337AB7";
    document.getElementById('iconStyleAlert').style.display = "block";
    iconDisplayStyle = "icon_only";
    console.log(iconDisplayStyle);
});

document.getElementById('overlayDisplayYes').addEventListener("click", function(){
    document.getElementById('overlayDisplayYes').style.backgroundColor = "#337AB7";
    document.getElementById('overlayDisplayNo').style.backgroundColor = "#fff";
    overlayDisplay = "true";
    console.log(overlayDisplay);
});

document.getElementById('overlayDisplayNo').addEventListener("click", function(){
    document.getElementById('overlayDisplayYes').style.backgroundColor = "#fff";
    document.getElementById('overlayDisplayNo').style.backgroundColor = "#337AB7";
    overlayDisplay = "false";
    console.log(overlayDisplay);
});

document.getElementById('previewWidth').addEventListener("click", function(){
    /* Set the color showing its set */
    document.getElementById('previewSizeAlert').style.display = "block";
});

document.getElementById('previewHeight').addEventListener("click", function(){
    /* Set the color showing its set */
    document.getElementById('previewSizeAlert').style.display = "none";
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
    previewDivWell.innerHTML = '<h4>Preview</h4> size: ' + previewSize_w + 'x' + previewSize_h + '<br /><object type="text/html" data="previewHTML.html" width="340" height="290" style="scrolling: no;"></object>';

    //makeFrame();
    //previewDiv.contentDocument.write('jaren was here');
});

/* Get settings preview button holy shit */
document.getElementById('getSettingsPreview').addEventListener("click", function() {
    /* First lets check if the user has entered values for Icon Delay, Vertical Offset, Horizontal Offset, Width and Height and if not set Default Values */

    /* Icon Delay */
    if (document.getElementById('iconDelay').value >= 31){
        alert('Take it easy, keep it 30 seconds or less!');
        document.getElementById('iconDelay').value = '';
        iconDelay = "0";
        console.log('icon delay: ' + iconDelay);
    }
    else {
        if (document.getElementById('iconDelay').value == null || document.getElementById('iconDelay').value == '') {
            iconDelay = "0";
            console.log('icon delay: ' + iconDelay);
        }
        else if (document.getElementById('iconDelay').value != null || document.getElementById('iconDelay').value == '') {
            iconDelay = document.getElementById('iconDelay').value;
            console.log('icon delay: ' + iconDelay);
        }
    }

    /* Vertical Offset */
    if (document.getElementById('verticalOffset').value >= 31){
        alert('Take it easy, keep it 30 pixels or less!');
        document.getElementById('verticalOffset').value = '';
        verticalOffset = "0";
        console.log('vertical offset: ' + verticalOffset);
    }
    else {
        if (document.getElementById('verticalOffset').value == null || document.getElementById('verticalOffset').value == '') {
            verticalOffset = "0";
            console.log('vertical offset: ' + verticalOffset);
        }
        else if (document.getElementById('verticalOffset').value != null || document.getElementById('verticalOffset').value == '') {
            verticalOffset = document.getElementById('verticalOffset').value;
            console.log('vertical offset: ' + verticalOffset);
        }
    }

    /* Horizontal Offset */
    if (document.getElementById('horizontalOffset').value >= 31){
        alert('Take it easy, keep it 30 pixels or less!');
        document.getElementById('horizontalOffset').value = '';
        horizontalOffset = "0";
        console.log('horizontal offset: ' + horizontalOffset);
    }
    else {
        if (document.getElementById('horizontalOffset').value == null || document.getElementById('horizontalOffset').value == '') {
            horizontalOffset = "0";
            console.log('horizontal offset: ' + horizontalOffset);
        }
        else if (document.getElementById('horizontalOffset').value != null || document.getElementById('horizontalOffset').value == '') {
            horizontalOffset = document.getElementById('horizontalOffset').value;
            console.log('horizontal offset: ' + horizontalOffset);
        }
    }
    /* Preview Width */
    if (document.getElementById('previewWidth').value == null || document.getElementById('previewWidth').value == '') {
            previewWidth = "300";
            console.log('preview width: ' + previewWidth);
        }
        else if (document.getElementById('previewWidth').value != null || document.getElementById('previewWidth').value == '') {
            previewWidth = document.getElementById('previewWidth').value;
            console.log('preview width: ' + previewWidth);
        }
    /* Preview Height */
    if (document.getElementById('previewHeight').value == null || document.getElementById('previewHeight').value == '') {
        previewHeight = "250";
        console.log('preview height: ' + previewHeight);
    }
    else if (document.getElementById('previewHeight').value != null || document.getElementById('previewHeight').value == '') {
        previewHeight = document.getElementById('previewHeight').value;
        console.log('preview height: ' + previewHeight);
    }
});


