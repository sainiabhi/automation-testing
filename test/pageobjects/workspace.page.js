const Page = require("./page");

class WorkSpace extends Page {
  get title() {
    return $(
      '//h2[contains(text(),"Ideas that change the world are often the most con")]'
    );
  }
  get pageSubTitle() {
    return $(
      '//p[@class="a ac ae ai aj an ao as bd be bf bg bh bi bj bk bl bm bn bo bp bq"]'
    );
  }
  get headerContainer() {
    return $('//nav[@id="site-navigation"]');
  }
  get headerLogoLinkSelector() {
    return $('#site-nav-topbar-wrapper a[data-autoid="nav:siteNavLogoSmall"]');
  }
  get headerLogoSelector() {
    return $(
      '#site-nav-topbar-wrapper a[data-autoid="nav:siteNavLogoSmall"] img'
    );
  }
  get headerSideTopNavMenu() {
    return $('//button[@id="nav:topNavCarMenu"]');
  }
  get headerSideNavToggleBtn() {
    return $('//button[@id="sitenav-sidenav-toggle"]');
  }
  get safetyFeatureContainer() {
    return $('//div[@id="IconCallouts-1"]');
  }
  get safetyFeatureContainerTitle() {
    return $('//div[@class="a cn ev ew y z"]');
  }
  get getSpeedCapDescription() {
    return $(
      "//p[contains(text(),'To send a strong signal about the dangers of speed')]"
    );
  }
  get getHighwayPilot() {
    return $(
      '//p[contains(text(),"With support from LiDAR sensors, the next generati")]'
    );
  }
  get getDrivingMonitoringCameras() {
    return $(
      '//p[contains(text(),"To help address intoxication and distraction in tr")]'
    );
  }
  get getCareKey() {
    return $(
      '//div[@class="a"]//div[4]//div[2]//div[1]'
    );
  }
  get videoContainer() {
    return $('//video[@class="a cn co cp cq cr cs ct cu cv cw cx cy cz da"]');
  }
  get videoTestimonialContainer() {
    return $('//div[@data-component="VideoTestimonials"]');
  }
  get videoTestimonialTitleContainer() {
    return $('//h2[normalize-space()="One of a million"]');
  }
  get imageWithTextTitle() {
    return $('//h2[normalize-space()="Decades of innovation"]');
  }
  get imageWithTextSubTitle() {
    return $('//p[@class="a ac ae aj ao as bd bf bh bj bm bp gg gh gi gj gk gl gm gn kr ku"]');
  }
  get exploreOurModalContainer() {
    return $('//div[@data-component="ProductListCarousel"]');
  }
  get getDisclaimerText() {
    return $('//div[@data-component="Disclaimer"]');
  }
  get footerContainer() {
    return $('//footer[@data-autoid="footer:container"]');
  }
  get cookieAcceptButton() {
    return $('//button[normalize-space()="Accept"]');
  }
  get learnMoreLinkSelector() {
    return $('//a[@data-autoid="iconCallouts:cta"]');
  }
  get rechargeLinkSelector() {
    return $('//a[@aria-label="Learn more about Recharge"]');
  }
  get privacyLinkSelector() {
    return $('//a[normalize-space()="Privacy"]');
  }

  /**
   * a method to validate whether the page is displayed or not
   * @return {boolean} returns true or false
   */
  isDisplayed() {
    this.title.waitForExist(15000);
    return this.title.isExisting();
  }

  /**
   * a method to validate whether header on the page is displayed or not
   * @return {boolean} returns true or false
   */
  isHeaderContainerDisplayed() {
    return this.headerContainer.isExisting();
  }

  /**
   * a method to validate whether header on the page is displayed or not
   * @return {boolean} returns true or false
   */
  isSafetyFeatureContainerDisplayed() {
    return this.safetyFeatureContainer.isExisting();
  }

  /**
   * a method to validate whether video container on page is displayed or not
   * @return {boolean} returns true or false
   */
  isVideoContainerDisplayed() {
    return this.videoTestimonialContainer.isExisting();
  }

  /**
   * a method to validate whether video container on page is displayed or not
   * @return {boolean} returns true or false
   */
  isVideoTestimonialContainerDisplayed() {
    return this.videoContainer.isExisting();
  }

  /**
   * a method to validate whether video container on page is displayed or not
   * @return {boolean} returns true or false
   */
  isExploreModalDisplayed() {
    return this.exploreOurModalContainer.isExisting();
  }

  /**
   * a method to validate whether footer container on page is displayed or not
   * @return {boolean} returns true or false
   */
  isFooterDisplayed() {
    return this.footerContainer.isExisting();
  }

  /**
   * a method which returns text according to the type required
   * @return {string} returns text in tags
   */
  verifyTextDescription(textType) {
    return {
      "headerNavCarMenu": this.headerSideTopNavMenu.getText(),
      "headerNavSideToggleBtn": this.headerSideNavToggleBtn.getText(),
      "speedText": this.getSpeedCapDescription.getText(),
      "highwayText": this.getHighwayPilot.getText(),
      "driveCameraText": this.getDrivingMonitoringCameras.getText(),
      "careKeyText": this.getCareKey.getText(),
      "pageSubTitle": this.pageSubTitle.getText(),
      "safetyContainerTitle": this.safetyFeatureContainerTitle.getText(),
      "videoTestimonialTitle": this.videoTestimonialTitleContainer.getText(),
      "imgWithTextTitle": this.imageWithTextTitle.getText(),
      "imgWithTextSubtitle": this.imageWithTextSubTitle.getText(),
      "disclaimerText": this.getDisclaimerText.getText()
    }[textType];
  }

  elementSelection(elementType) {
    return {
      "headerLogoLink": this.headerLogoLinkSelector,
      "acceptCookieBtn": this.cookieAcceptButton,
      "learnMoreLink": this.learnMoreLinkSelector,
      "rechargeLink": this.rechargeLinkSelector,
      "privacyFooterLink": this.privacyLinkSelector
    }[elementType]
  }
}

module.exports = new WorkSpace();
