(function(a) {
	a.scrolltotop = function(k) {
		k = jQuery.extend({
			startline: 100,
			scrollto: 0,
			scrollduration: 500,
			fadeduration: [500, 100],
			controlHTML: '<a href="javascript:;"><b>\ufffd\u0635\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd</b></a>',
			className: "",
			titleName: "\ufffd\u0635\ufffd\ufffd\ufffd\ufffd\ufffd",
			offsetx: 5,
			offsety: 5,
			anchorkeyword: "#top",
		}, k);
		var c = {
			isvisible: false,
			shouldvisible: false
		};
		var f = this;
		var e, i, d;
		var j = function() {
				var l = document.all;
				d = !l || l && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
				e = (window.opera) ? (document.compatMode == "CSS1Compat" ? a("html") : a("body")) : a("html,body");
				i = a('<div class="' + k.className + '" id="topcontrol">' + k.controlHTML + "</div>").css({
					position: d ? "fixed" : "absolute",
					bottom: k.offsety,
					right: k.offsetx,
					opacity: 0,
					cursor: "pointer"
				}).attr({
					title: k.titleName
				}).click(function() {
					b();
					return false;
				}).appendTo("body");
				if(document.all && !window.XMLHttpRequest && i.text() != "") {
					i.css({
						width: i.width()
					});
				}
				h();
				a('a[href="' + k.anchorkeyword + '"]').click(function() {
					b();
					return false;
				});
				a(window).bind("scroll resize", function(m) {
					h();
				});
				return f;
			};
		var b = function() {
				if(!d) {
					i.css({
						opacity: 0
					});
				}
				var l = isNaN(k.scrollto) ? parseInt(k.scrollto) : k.scrollto;
				if(typeof l == "string") {
					l = jQuery("#" + l).length >= 1 ? jQuery("#" + l).offset().top : 0;
				}
				e.animate({
					scrollTop: l
				}, k.scrollduration);
			};
		var g = function() {
				var n = jQuery(window);
				var m = n.scrollLeft() + n.width() - i.width() - k.offsetx;
				var l = n.scrollTop() + n.height() - i.height() - k.offsety;
				i.css({
					left: m + "px",
					top: l + "px"
				});
			};
		var h = function() {
				var l = jQuery(window).scrollTop();
				if(!d) {
					this.keepfixed();
				}
				c.shouldvisible = (l >= k.startline) ? true : false;
				if(c.shouldvisible && !c.isvisible) {
					i.stop().animate({
						opacity: 1
					}, k.fadeduration[0]);
					c.isvisible = true;
				} else {
					if(c.shouldvisible == false && c.isvisible) {
						i.stop().animate({
							opacity: 0
						}, k.fadeduration[1]);
						c.isvisible = false;
					}
				}
			};
		return j();
	};
})(jQuery);