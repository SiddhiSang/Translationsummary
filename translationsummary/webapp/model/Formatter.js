sap.ui.define(function () {
	"use strict";

	var Formatter = {
		formatDate: function (date) {
			if (date !== "" & date !== undefined & date !== null) {
				if (date === "Invalid Date") {
					return "";
				} else {
					date = new Date(date);
					var dateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
						format: "yMMMdhhmm",
						style: "short"
					});
					return dateFormat.format(date);
				}
			} else {
				return "";
			}
		},
		showLoader : function()     {
			if(!this.loader) {
				var xml = "<BusyDialog xmlns='sap.m' />";
				this.loader = new sap.ui.xmlfragment({
					fragmentContent : xml
				}, this);
			}
			this.loader.open();
		},

		hideLoader : function() {
			this.loader.close();
		},
		onFieldIdVisibility : function (oVal) {
			if (oVal) {
				return "";
			}
		},
		onSelcetCheckVal: function (oVal) {
			if (oVal === "False") {
				return false;
			}
		},
		persoVisiblity: function (selected) {
			if (!this.getModel("variant").getObject("/" + selected + "/visible")) {
				return false;
			} else {
				return this.getModel("variant").getObject("/" + selected + "/visible");
			}
		},
		visiblity: function (visible) {
			if (visible || visible === undefined) {
				return true;
			} else {
				return false;
			}
		},
		tooltipDateFormat: function (value1, value2) {
			if (value1 && value2) {
				return this.Formatter.tooltipFormatDate(value1) + " - " + this.Formatter.tooltipFormatDate(value2);
			} else {
				return "";
			}
		},
		tooltipFormatDate: function (date) {
			if (date !== "" & date !== undefined & date !== null) {
				if (date === "Invalid Date") {
					return "";
				} else {
					var month = date.getMonth();
					var dat = date.getDate();
					var year = date.getFullYear();
					var monthArray = new Array("Jan", "Feb", "Mar", "Apr",
						"May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
						"Dec");
					month = monthArray[month];
					date = dat + " " + month + "" + " " + year;
					return date;
				}
			} else {
				return "";
			}
		}

	};
	return Formatter;
}, /* bExport= */ true);