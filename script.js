function getElementsByClassName(classname) {
  var rl = new Array();
  var re = new RegExp('(^| )'+classname+'( |$)');
  var ael = document.getElementsByTagName('*');
  var op = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
  if (document.all && !op) ael = document.all;
  for (i=0, j=0; i<ael.length; i++) {
    if (re.test(ael[i].className)) {
      rl[j]=ael[i];
      j++;
    }
  }
  return rl;
}

function startList(nav) {
  if (document.all&&document.getElementById(nav)) {
    navRoot = document.getElementById(nav);
    for (i=0; i<navRoot.childNodes.length; i++) {
      node = navRoot.childNodes[i];
      if (node.nodeName=="LI") {
        node.onmouseover=function() {
          this.className+=" over";
          this.style.zIndex=200;
        }
        node.onmouseout=function() {
          this.className=this.className.replace(" over", "");
          this.style.zIndex=0;
        }
      }
    }
  }
}

function attachExternals() {
  if (document.getElementsByTagName('a')) {
    as = document.getElementsByTagName('a');
    for (var i=0; i<as.length; i++) {
      if ((as[i].className.indexOf('external') >= 0)&&(as[i].href.indexOf('.pdf') < 0)) {
        as[i].target = '_blank';
      }
    }
  }
}

function evenColumns(columns) {
  if (document.getElementById(columns)) {
    var column = columns.substring(0,(columns.length-1));
    maxheight = 0;
    thecolumns = getElementsByClassName(column);
    for (var i=0; i<thecolumns.length; i++) {
      thepanel = thecolumns[i].getElementsByTagName('div')[0].getElementsByTagName('div')[0];
      thepanel.style.minHeight = '0';
      if (maxheight < thepanel.offsetHeight) {
        maxheight = thepanel.offsetHeight;
      }
    }
    for (var i=0; i<thecolumns.length; i++) {
      thepanel = thecolumns[i].getElementsByTagName('div')[0].getElementsByTagName('div')[0];
      thepanel.style.minHeight = (maxheight - 14) + 'px';
    }
  }
}

function attachContactUs(){
  if(document.getElementById){
  	if($('form_referedfrom') && $('form_referedfrom_other')){
  		$('form_referedfrom_other').style.display = 'none';
  		$('form_referedfrom').onchange = function(){
  			if($('form_referedfrom_other')){
	  			if(this.value=='_other_'){
	  				$('form_referedfrom_other').style.display = 'inline';
	  				$('form_webfrom').getParent().style.display = 'none';	
	  			} else {
	  				if(this.value=='Web'){
	  					$('form_webfrom').getParent().style.display = 'block';
	  				} else {
	  					$('form_webfrom').getParent().style.display = 'none';
	  					$('form_webfrom').value = null;
	  					$('form_webfrom_other').value = null;
	  					$('form_webfrom_other').style.display = 'none';
	  				}
	  				$('form_referedfrom_other').style.display = 'none';
	  			}
  			}
  		}
  		if($('form_webfrom')){
  			$('form_webfrom').getParent().style.display = 'none';
  			if($('form_webfrom_other')){
		  		$('form_webfrom_other').style.display = 'none';
		  	}
		  	$('form_webfrom').onchange = function(){
	  			if($('form_referedfrom_other')){
		  			if(this.value=='_other_'){
		  				$('form_webfrom_other').style.display = 'inline';	
		  			} else {
		  				$('form_webfrom_other').style.display = 'none';
		  			}
	  			}
	  		}
  		}
  	}
//form_intrest
 		if($('form_intrest')){
 			if($('form_intrest_other')){
	  		$('form_intrest_other').style.display = 'none';
	  	}
	  	$('form_intrest').onchange = function(){
  			if($('form_intrest_other')){
	  			if(this.value=='_other_'){
	  				$('form_intrest_other').style.display = 'inline';	
	  			} else {
	  				$('form_intrest_other').style.display = 'none';
	  			}
  			}
  		}
 		}

  }
}

function attachPrintLink() {
  if (document.getElementById('printlink')) {
    printtext = document.createTextNode('Print');
    printanchor = document.createElement('a');
    printanchor.href = '#';
    printanchor.onclick = function() {
      window.print();
      return false;
    };
    printanchor.appendChild(printtext);
    document.getElementById('printlink').appendChild(printanchor);
  }
}

function analyticsForm() {
	if(document.getElementById('form_name')) {
		document.getElementById('form_name').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_name'); }
	}
	if(document.getElementById('form_position')) {
		document.getElementById('form_position').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_position'); }
	}
	if(document.getElementById('form_organisation')) {
		document.getElementById('form_organisation').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_organisation'); }
	}
	if(document.getElementById('form_email')) {
		document.getElementById('form_email').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_email'); }
	}
	if(document.getElementById('form_phone')) {
		document.getElementById('form_phone').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_phone'); }
	}
	if(document.getElementById('form_address1')) {
		document.getElementById('form_address1').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_address1'); }
	}
	if(document.getElementById('form_address2')) {
		document.getElementById('form_address2').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_address2'); }
	}
	if(document.getElementById('form_address3')) {
		document.getElementById('form_address3').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_address3'); }
	}
	if(document.getElementById('form_country')) {
		document.getElementById('form_country').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_country'); }
	}
	if(document.getElementById('form_postcode')) {
		document.getElementById('form_postcode').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_postcode'); }
	}
	if(document.getElementById('form_referedfrom')) {
		document.getElementById('form_referedfrom').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_referedfrom'); }
	}
	if(document.getElementById('form_intrest')) {
		document.getElementById('form_intrest').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_intrest'); }
	}
	if(document.getElementById('form_question')) {
		document.getElementById('form_question').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_question'); }
	}
	if(document.getElementById('form_2_submit')) {
		document.getElementById('form_2_submit').onblur = function(){ pageTracker._trackPageview('/forms/signup/form_2_submit'); }
	}
}

function init() {
  startList('navbar');
  attachExternals();
  evenColumns('signposts');
  attachContactUs();
  attachPrintLink();
  analyticsForm();
}

window.onresize = function() {
  evenColumns('signposts');
};
