function submitForm(e){let i=$("#form-contact-me"),a=i.serializeArray(),s={};$("#loader").css("visibility","visible");for(let e=0;e<a.length;e++)s[a[e].name]=a[e].value;return event.preventDefault(),s.email&&s.subject&&s.message?($("#incorrect-input").css("visibility","hidden"),Email.send({SecureToken:"67667fdf-0cee-4802-8697-aa780a82e242",To:"contact.to.sandeep.mani@gmail.com",From:s.email,Subject:s.subject,Body:s.message}).then((e=>{"OK"===e?(i.find("input[type=text], textarea").val(""),$("#mail-error").css("visibility","hidden")):$("#mail-error").css("visibility","visible"),$("#loader").css("visibility","hidden")}))):($("#loader").css("visibility","hidden"),void $("#incorrect-input").css("visibility","visible"))}!function(e){var i=e(window),a=e("body"),s=e("#nav");breakpoints({wide:["961px","1880px"],normal:["961px","1620px"],narrow:["961px","1320px"],narrower:["737px","960px"],mobile:[null,"736px"]}),i.on("load",(function(){window.setTimeout((function(){a.removeClass("is-preload")}),100)}));var l=s.find("a");l.addClass("scrolly").on("click",(function(i){var a=e(this);"#"==a.attr("href").charAt(0)&&(i.preventDefault(),l.removeClass("active"),a.addClass("active").addClass("active-locked"))})).each((function(){var i=e(this),a=i.attr("href"),s=e(a);s.length<1||s.scrollex({mode:"middle",top:"-10vh",bottom:"-10vh",initialize:function(){s.addClass("inactive")},enter:function(){s.removeClass("inactive"),0==l.filter(".active-locked").length?(l.removeClass("active"),i.addClass("active")):i.hasClass("active-locked")&&i.removeClass("active-locked")}})})),e(".scrolly").scrolly(),e('<div id="headerToggle"><a href="#header" class="toggle"></a></div>').appendTo(a),e("#header").panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"left",target:a,visibleClass:"header-visible"}),particlesJS.load("particles-js","./assets/particlesjs-config.json",(function(){console.log("callback - particles.js config loaded")}))}(jQuery);