sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.presalescentral.translationsummary.controller.translationListReport", {
            onInit: function () {

            },
            onRequestIdValuehelp: function (oEvent) {
                // create value help dialog
                // this.Formatter.showLoader();
                if (!this._RequestIdValueHelpDialog) {
                    this._RequestIdValueHelpDialog = sap.ui.xmlfragment(this.getView().getId(),
                        "com.presalescentral.translationsummary.fragments.RequestID", this);
                    this.getView().addDependent(this._RequestIdValueHelpDialog);
                }
                // this.onRequestIdSrchLive();
                this.getView().byId("onReqstSrchValId").setValue();
                // var aReqIds = this.getView().getModel("oRequestIdModel").getProperty("/oRequestIdListSet");
                // $.each(aReqIds, function (index, item) {
                //     if (this.addReqIdMapData && this.addReqIdMapData.hasOwnProperty(item.RequestId)) {
                //         item.selected = true;
                //     } else {
                //         item.selected = false;
                //     }
                // }.bind(this));
                // this.getView().getModel("oRequestIdModel").setProperty("/oRequestIdListSet", aReqIds);
                // open value help dialog filtered by the input value
                this._RequestIdValueHelpDialog.open();
                this.Formatter.hideLoader();
            },
            onRequestIdSrchLive: function (oEvent) {
                if (oEvent) {
                    this.onCustomerSrch(oEvent, oEvent.getSource().getValue().trim().toLowerCase(), "SDCShowroom", "oRequestIdModel", "RequestId");
                } else {
                    this.onCustomerSrch(oEvent, "", "SDCShowroom", "oRequestIdModel", "RequestId");
                }
            },
            onRequstIdCnfrm: function (oEvent) {
                this._RequestIdValueHelpDialog.close();
            },
            onCloseRequestIdFrag: function () {
                this._RequestIdValueHelpDialog.close();
            },
        });
    });
