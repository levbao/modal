/* object to pass to modal**********************************************************************
options = {
    header: optional
	content: required
	footer: optional
	size:  optional ('M' by default - 'S': 30%, or 'M': 50%, or 'L': 80%)
	closeable: true or false (true by default.  If undefined or defined and true, close button shown up and user can click or click outside to close the modal)
}
***********************************************************************************************************/
class Modal {
    constructor(modalObj) {
        if(typeof modalObj !== 'undefined') {
            this.header = (typeof modalObj.header !== 'undefined')? modalObj.header : '';
            this.content = (typeof modalObj.content !== 'undefined')? modalObj.content : '';
            this.footer = (typeof modalObj.footer !== 'undefined')? modalObj.footer : '';
            this.closeable = (typeof modalObj.close === 'undefined' || (typeof modalObj.close !== 'undefined' && modalObj.close === true))? true : false;
            this.size = (typeof modalObj.size !== 'undefined')? modalObj.size : 'M';

            this.init();
        }
    }
    init() {
        this.openModal();
        this.onCloseClick();
    }
    openModal() {
		var body = document.querySelector("body");
        var myModal  = this.populateModal(that.header,that.content,that.footer);        

        var overlayWrap = document.createElement("div");
        overlayWrap.setAttribute("class", "rvbdModal-c");
        overlayWrap.setAttribute("id", "rvbdModal-c");
        overlayWrap.innerHTML = myModal;
        body.appendChild(overlayWrap);
        this.showModal();
        this.styleModal();
	}
    populateModal(header,content,footer) {
        var myModal = '';
        myModal = '<div class="rvbdModal-content-c">';
        if(header != '') {
            myModal += '<div class="rvbdModal-header-c">' + header + '</div>';
        }
        if(that.closeable===true) {
            myModal += '<span class="rvbdModal-close-c" id="rvbdModal-close-c">&times;</span>';
        }
        myModal += '<div class="rvbdModal-body-c" id="rvbdModal-body-c">' + content + '</div>';
        if(footer != '') {
            myModal += '<div class="rvbdModal-footer-c">' + footer + '</div>';
        }
        myModal += '</div>';

        return myModal;
    }
    showModal() => {
        document.getElementById("rvbdModal-c").style.display = "block";
    }
    styleModal() => {
        if(this.size.toLowerCase() == 's') {
            document.getElementsByClassName("rvbdModal-content-c")[0].style.width = '30%';
        } else if(this.size.toLowerCase() == 'm') {
            document.getElementsByClassName("rvbdModal-content-c")[0].style.width = '50%';
        } else {
            document.getElementsByClassName("rvbdModal-content-c")[0].style.width = '80%';
        }
		/*
        if(!this.isBottomInViewport()) {
            document.getElementById("rvbdModal-body-c").style.height = document.documentElement.clientHeight+"px";
        }
		*/
    }
	/*
    isBottomInViewport() => {
        var rvbdModalC = document.getElementById('rvbdModal-c');
        const rect = rvbdModalC.getBoundingClientRect();
        return (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    }
	*/
	onCloseClick() => {
        var rvbdModalC = document.getElementById('rvbdModal-c');
		var closeModalC = document.getElementById("rvbdModal-close-c");
        window.onclick = function(event) {
            if ((event.target == closeModalC || event.target== rvbdModalC) && this.closeable===true) {
	            this.closeModal();
            }
		}
	}
	closeModal() => {
		var rvbdModalC = document.getElementById('rvbdModal-c');
		rvbdModalC.remove();
	}
  isHTML(str) => {
        var parentNode = document.createElement('div');
        parentNode.innerHTML = str;
      
        for (var c = parentNode.childNodes, i = c.length; i--;) {
          if (c[i].nodeType == 1) return true; 
        }     
        return false;
    }
}
