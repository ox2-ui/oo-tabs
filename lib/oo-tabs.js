


Template.ooTabs.created = function() {
  var self = this,
      tabs = this.data.tabs;
  self.activeTab = new Blaze.ReactiveVar(tabs.activeTab ? tabs.activeTab : tabs.tabsArray[0].template)
}

Template.ooTabs.helpers({
  isActive: function() {
    return Template.instance().activeTab.get() === this.template ? 'is-active' : ''
  },
  activeTabTemplate: function() {
    return Template.instance().activeTab.get();
  }
});

Template.ooTabs.events({
  'click .js-setActiveTab' : function (e, t) {
    t.activeTab.set(this.template)
  }
});

