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

            //rquestor
            onRequestorValueHelpOpen: function (oEvent) {
                this.oRequestor = oEvent.getSource();
                if (!this.userSearchMultiDialog) {
                    this.userSearchMultiDialog = sap.ui.xmlfragment(this.getView().getId(),
                        "com.presalescentral.translationsummary.fragments.RequestorFilter", this);
                    this.getView().addDependent(this.userSearchMultiDialog);
                }
                this.byId("onRequestSrchMulti").setValue("");
                // var oTokensReqstor = this.getView().getModel("variant").getProperty("/requestor/value1");
                // for (var i in oTokensReqstor) {
                //     this.getView().getModel("RequestModel").setProperty("/results('" + oTokensReqstor[i].UserName + "')" + "/selected", true);
                // }
                // this.byId("onRequestFilTabId").getModel("RequestModel").getData().results = [];
                // this.byId("onRequestFilTabId").getModel("RequestModel").updateBindings();
                this.userSearchMultiDialog.open();
            },
            onRequestOkSelction: function (oEvent) {
                // var that = this;
                // var oMsgVals = '';
                // //	that.msgS='';
                // var selectedSolutions = this.byId("onRequestFilTabId").getSelectedItems();
                // var oVariant = this.getView().getModel("variant").getData().requestor.value1;
                // if (oVariant === '') {
                //     this.getView().getModel("variant").setProperty("/requestor/value1", []);
                // }
    
                // $.each(selectedSolutions, function (index, solution) {
                //     var obj = solution.getBindingContext("RequestModel").getObject();
                //     var data = {
                //         "ID": obj.ID,
                //         "UserName": obj.FullName
                //     };
                //     if (!that.oSelectedUserData.hasOwnProperty(obj.ID)) {
                //         that.getView().getModel("variant").getData().requestor.value1.push(data);
                //         that.getView().getModel("variant").updateBindings();
                //     } else {
                //         MessageToast.show(obj.FullName + " is already added");
                //         /*var oMsg = obj.FullName + "is already added";
                //         oMsgVals +=oMsg+ " "+"\n\n";*/
                //     }
                // });
                // /*	if (oMsgVals) {
                //         MessageToast.show(oMsgVals);
                //     }*/
                // for (var i = 0; i < oVariant.length; i++) {
                //     this.oSelectedUserData[oVariant[i].ID] = oVariant[i];
                // }
                this.userSearchMultiDialog.close();
            },
            onCloseRequestFrag: function (oEvent) {
                this.userSearchMultiDialog.close();
            },
            // onCustomerNameOpenFrag: function (oEvent) {
            //     this.oCustNameVal = oEvent.getSource();
            //     if (!this.onCustNameFrag) {
            //         this.onCustNameFrag = sap.ui.xmlfragment(this.getView().getId(),
            //             "com.presalescentral.translationsummary.fragments.CustomerNameFilter", this);
            //         this.getView().addDependent(this.onCustNameFrag);
            //     }
            //     this.byId("onCustSrchVal").setValue("");
         
            //     this.onCustNameFrag.open();
            // },
            onCustomerNameOpenFrag: function (oEvent) {
                this.oCustNameVal = oEvent.getSource();
                if (!this.onCustNameFrag) {
                    this.onCustNameFrag = sap.ui.xmlfragment(this.getView().getId(),
                        "com.presalescentral.translationsummary.fragments.CustomerNameFilter", this);
                    this.getView().addDependent(this.onCustNameFrag);
                }
                this.byId("onCustSrchVal").setValue("");
                // this.onSearchCustNameUser();
                // var aSolutionData = this.getView().getModel("CustNameModel").getProperty("/dbrOppAccountSet");
                // $.each(aSolutionData, function (index, item) {
                //     if (this.additionalSolMap && this.additionalSolMap.hasOwnProperty(item.customer)) {
                //         item.selected = true;
                //     } else {
                //         item.selected = false;
                //     }
                // }.bind(this));
                // this.getView().getModel("CustNameModel").setProperty("/dbrOppAccountSet", aSolutionData);
                this.onCustNameFrag.open();
            },
            onSlctCustNamecnfrm: function (oEvent, list, modelName, property) {
                var selectedSolutions = this.byId("CustNameListMulti").getSelectedItems();
                // var that = this;
                // var tempArr = [];
                // this.additionalSolMap = {};
                // $.each(selectedSolutions, function (index, solution) {
                //     var obj = solution.getBindingContext("CustNameModel").getObject();
                //     that.additionalSolMap[obj.customer] = obj;
                //     var data = {
                //         "selected": obj.selected,
                //         "customer": obj.customer
                //     };
                //     tempArr.push(data);
                // });
                // that.getView().getModel("variant").setProperty("/customer/value1", tempArr);
                this.onCustNameFrag.close();
            },
            onCloseCustomerNmeFrag: function () {
                this.onCustNameFrag.close();
            },
            onCountryValuehelp: function (oEvent) {
                this.oCountryVal = oEvent.getSource().getId();
                if (!this.onCountryDialog) {
                    this.onCountryDialog = sap.ui.xmlfragment(this.getView().getId(), "com.presalescentral.translationsummary.fragments.CountryFilter",
                        this);
                    this.getView().addDependent(this.onCountryDialog);
                }
                // this.onCountryLivesrch();
                // this.byId("countrySearchMulti").setValue("");
                // var aCoutryData = this.getView().getModel("oCountryModel").getProperty("/oCountryListSet");
                // $.each(aCoutryData, function (index, item) {
                //     if (this.addCountryMapData && this.addCountryMapData.hasOwnProperty(item.CountryDescription)) {
                //         item.selected = true;
                //     } else {
                //         item.selected = false;
                //     }
                // }.bind(this));
                // this.getView().getModel("oCountryModel").setProperty("/oCountryListSet", aCoutryData);
                //	this.byId("CountryListMulti").getBinding("items").attachDataReceived(jQuery.proxy(this._activitysetDataReceived, this));
                this.onCountryDialog.open();
            },
            onConfrmCountry: function (oEvent) {
             
                this.onCountryDialog.close();
            },
            onCloseCountryFrag:function(){
                this.onCountryDialog.close();
            },
            onOppSortDialog: function () {
                if (!this.oOppSortDialog) {
                    this.oOppSortDialog = sap.ui.xmlfragment(this.getView().getId(), "com.presalescentral.translationsummary.fragments.OppSortDialog",
                        this);
                    this.getView().addDependent(this.oOppSortDialog);
                }
                this.oOppSortDialog.open();
                var JsonData = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("com.presalescentral.translationsummary",
                    "/model/tableColumns.json"));
                this.oOppSortDialog.setModel(JsonData);
            },
            onOppSortDialogClose: function () {
                this.oOppSortDialog.destroy();
                this.oOppSortDialog = null;
            },
            onOppPersonalizationDialog: function () {
                if (!this.oOppPersonalizationDialog) {
                    this.oOppPersonalizationDialog = sap.ui.xmlfragment(this.getView().getId(),
                        "com.presalescentral.translationsummary.fragments.OppPersonalizationDialog", this);
                    this.getView().addDependent(this.oOppPersonalizationDialog);
                }
                // var JsonData = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("com.presalescentral.translationsummary",
                //     "/model/tableColumns.json"));
                // this.byId("OppPersonalizationList").setModel(JsonData, "oppColumns");
                this.oOppPersonalizationDialog.open();
            },
            onOppPersonalizationDialogClose: function () {
                this.oOppPersonalizationDialog.destroy();
                this.oOppPersonalizationDialog = null;
                //this.oOppPersonalizationDialog.close();
            },
            navToCreateTranslation: function (oEvent) {
                // //	this.ovariantStrage.put("sessionStorageVariantModel", this.getView().getModel("variant").getData());
                // var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation"); // get a handle on the global XAppNav service
                // //	sap.git.usage.Reporting.addEvent(this.getOwnerComponent(), "Create Translation");
                // var hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                //     target: {
                //         semanticObject: "pctranslationform",
                //         action: "app"
                //     }
                // })) || "";
                // oCrossAppNavigator.toExternal({
                //     target: {
                //         shellHash: hash
                //     }
                // });
                
            },
        });
    });
