
function unhide(name){
    d3.selectAll(".un-hi").filter(name).style("display","block");;
};

function hide(name) {
    d3.select(name).style("display","none");
};

function clear_input(name) {
    d3.select(name).property("value","");
};

function update(input_value,output,name_hide){
    var input = d3.select(input_value).property("value");
    d3.select(input_value).property("value","");
    d3.select(output).text(input);
    hide(name_hide);
};

function cancel(name_hide,input) {
    hide(name_hide);
    clear_input(input);
};

var button = d3.selectAll("button");

// PROFILE CARD
d3.select("#img-des").on("click",_ => unhide("#desc-form"));
button.filter("#btn-update-desc").on("click", _ => update("#description","#nom-per","#desc-form"))
button.filter("#btn-cancel-desc").on("click", _ => cancel("#desc-form","#description"))

// EMAIL OPTION
d3.select("#email-chg").on("click",_ => unhide("#email-form"));
button.filter("#btn-update-email").on("click", _ => update("#email-input","#email-value","#email-form"))
button.filter("#btn-cancel-email").on("click", _ => cancel("#email-form","#email-input"))

// TEL OPTION
d3.select("#tel-chg").on("click",_ => unhide("#tel-form"));
button.filter("#btn-update-tel").on("click", _ => update("#tel-input","#tel-value","#tel-form"))
button.filter("#btn-cancel-tel").on("click", _ => cancel("#tel-form","#tel-input"))

// SOCIAL MEDIA OPTION
d3.select("#sm-chg").on("click",_ => unhide("#sm-form"));
button.filter("#btn-update-sm").on("click", _ => {
    selectorValue = d3.select("#selector").property("value");
    input = d3.select("#sm-input").property("value");
    if (selectorValue == "Facebook") {
        d3.select("#sm-value-f").text("");
        d3.select("#sm-value-f").append("h6").text("Facebook").style("color","blue");
        d3.select("#sm-value-f").append("p").text(input);
        clear_input("#sm-input");
    } else {
        d3.select("#sm-value-w").text("");
        d3.select("#sm-value-w").append("h6").text("WhatsApp").style("color","green");
        d3.select("#sm-value-w").append("p").text(input);
        clear_input("#sm-input");
    } 
})
button.filter("#btn-cancel-sm").on("click", _ => cancel("#sm-form","#sm-input"))

// COLLEGE DEGREE OPTION
d3.select("#college-chg").on("click",_ => unhide("#college-form"));
button.filter("#btn-update-college").on("click", _ => update("#college-input","#college-value","#college-form"))
button.filter("#btn-cancel-college").on("click", _ => cancel("#college-form","#college-input"))

// STUDY TIME DEGREE OPTION
d3.select("#study-chg").on("click",_ => unhide("#study-form"));
button.filter("#btn-update-study").on("click", _ => update("#study-input","#study-value","#study-form"))
button.filter("#btn-cancel-study").on("click", _ => cancel("#study-form","#study-input"))

// SCHOOL TIME DEGREE OPTION
d3.select("#school-chg").on("click",_ => unhide("#school-form"));
button.filter("#btn-update-school").on("click", _ => update("#school-input","#school-value","#school-form"))
button.filter("#btn-cancel-school").on("click", _ => cancel("#school-form","#school-input"))

// IMG CER/TITLE TIME DEGREE OPTION
d3.select("#img-form").on("click",_ => {
    d3.select("#img-cer").text("");
    d3.select("#img-cer").text("");
    d3.select("#img-cer").append("img")
    .attr("src","img/img_avatar.png")
    .attr("width","150px")
    .attr("height","150px");
});