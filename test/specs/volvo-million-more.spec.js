const WorkSpace = require("../pageobjects/workspace.page");
const TestData = require("../testdata/workspace.data.json");
const { assert } = require("chai");

describe("Workspace Tests", () => {
  before(() => {
    browser.maximizeWindow();
    browser.navigateTo(config.url);
    assert.equal(WorkSpace.isDisplayed(), true, "Landing page is displayed");
    WorkSpace.elementSelection("acceptCookieBtn").waitForExist(10000);
    WorkSpace.elementSelection("acceptCookieBtn").click();
  });

  after(() => {
    browser.closeWindow();
  });

  describe("Header Verification -> Logo and Two Menu Button verification", () => {
    it("Check the header container exists", () => {
      assert.equal(
        WorkSpace.isHeaderContainerDisplayed(),
        true,
        "Header View is not available"
      );
    });
    it("Check logo exists in header container", () => {
      assert.equal(
        WorkSpace.headerLogoSelector.isExisting(),
        true,
        "Logo is not available"
      );
    });
    it("Check top side car nav button in header container exists", () => {
      assert.equal(
        WorkSpace.headerSideTopNavMenu.isExisting(),
        true,
        "Side top nav menu button is not available"
      );
    });
    it("Check top side toggle menu in header container exists", () => {
      assert.equal(
        WorkSpace.headerSideNavToggleBtn.isExisting(),
        true,
        "Side nav button is missing"
      );
    });
  });

  describe("Video Container Verification", () => {
    it("verify video feature container exists", () => {
      assert.equal(
        WorkSpace.isVideoContainerDisplayed(),
        true,
        "failed to verify video story container"
      );
    });
  });

  describe("Safety Feature Container Verification", () => {
    it("verify safety feature container exists", () => {
      assert.equal(
        WorkSpace.isSafetyFeatureContainerDisplayed(),
        true,
        "failed to verify safety features"
      );
    });
    it("verify safety feature container title exists", () => {
      assert.include(
        WorkSpace.verifyTextDescription("safetyContainerTitle"),
        "A million more. With new and existing safety features",
        "failed to verify safety features container title"
      );
    });
  });

  describe("Video Testimonial Container Verification", () => {
    it("verify video testimonial container exists", () => {
      assert.equal(
        WorkSpace.isVideoContainerDisplayed(),
        true,
        "failed to verify video testimonial container"
      );
    });
    it("verify video testimonial container title exists", () => {
      assert.include(
        WorkSpace.verifyTextDescription("videoTestimonialTitle"),
        "One of a million",
        "failed to verify video testimonial container title"
      );
    });
  });

  describe("Explore Modal Container Verification", () => {
    it("verify explore modal container exists", () => {
      assert.equal(
        WorkSpace.isExploreModalDisplayed(),
        true,
        "failed to verify explore modal container"
      );
    });
    it("verify video testimonial container title exists", () => {
      assert.include(
        WorkSpace.verifyTextDescription("videoTestimonialTitle"),
        "One of a million",
        "failed to verify video testimonial container title"
      );
    });
  });

  describe("Verify footer container", () => {
    it("verify footer container exists", () => {
      assert.equal(
        WorkSpace.isFooterDisplayed(),
        true,
        "failed to verify footer container"
      );
    });
  });

  describe("Verify Static Texts on the million more page", () => {
    it("verify header top nav car menu", () => {
      assert.include(
        WorkSpace.verifyTextDescription("headerNavCarMenu"),
        "Our Cars",
        "failed to verify top nav car menu text"
      );
    });
    it("verify header top nav car menu incorrect text", () => {
      assert.include(
        WorkSpace.verifyTextDescription("headerNavCarMenu"),
        "Our New Cars SFGDF323234",
        "verifying a incorrect entry"
      );
    });
    it("verify header top nav side toggle button", () => {
      assert.include(
        WorkSpace.verifyTextDescription("headerNavSideToggleBtn"),
        "Menu",
        "failed to verify top nav side toggle button"
      );
    });
    it("verify page subtitle", () => {
      assert.include(
        WorkSpace.verifyTextDescription("pageSubTitle"),
        "After we introduced the 3-point safety belt,",
        "failed to verify page subtitle"
      );
    });
    it("verify speed cap description", () => {
      assert.include(
        WorkSpace.verifyTextDescription("speedText"),
        "To send a strong signal about the dangers of speeding",
        "failed to verify speed cap description"
      );
    });
    it("Verify highway pilot description", () => {
      assert.include(
        WorkSpace.verifyTextDescription("highwayText"),
        "With support from LiDAR sensors, the next generation of Volvo cars will be hardware-ready for autonomous drive",
        "failed to verify highway pilot description"
      );
    });
    it("verify driving monitoring cameras description", () => {
      assert.include(
        WorkSpace.verifyTextDescription("driveCameraText"),
        "To help address intoxication and distraction in traffic, we are working on new in-car solutions.",
        "failed to verify driving monitoring cameras description"
      );
    });
    it("verify care key description", () => {
      assert.include(
        WorkSpace.verifyTextDescription("careKeyText"),
        "We've recently introduced the Care Key, aimed at addressing speeding.",
        "failed to verify care key description"
      );
    });
    it("verify image with title text", () => {
      assert.include(
        WorkSpace.verifyTextDescription("imgWithTextTitle"),
        "Decades of innovation",
        "failed to verify image with title text"
      );
    });
    it("verify image with sub title text", () => {
      assert.include(
        WorkSpace.verifyTextDescription("imgWithTextSubtitle"),
        "Ever since our founding in 1927, we've been",
        "failed to verify image with sub title text"
      );
    });
    it("verify disclaimer text", () => {
      assert.include(
        WorkSpace.verifyTextDescription("disclaimerText"),
        "These films contain true stories from real people, who have been compensated for their participation.",
        "failed to verify disclaimer text"
      );
    });
  });

  describe("Verify Images on the million more page", () => {
    it('should save some screenshots', () => {
      // Save a full page screenshot
      browser.saveFullPageScreen('fullPage');
      // Save a screen
      browser.saveScreen('volvoMillionMorePage');
      // Save logo element
      browser.saveElement($('#site-nav-topbar-wrapper > nav > div._SN-ak._SN-al._SN-am._SN-ax._SN-dt._SN-u._SN-w > a > img'), 'pageLogoImage');
      // Check a full page screenshot
      expect(browser.checkFullPageScreen('fullPage')).toEqual(0);
      // Check a screen
      expect(browser.checkScreen('volvoMillionMorePage')).toEqual(0);
      // Check logo element
      expect(browser.checkElement($('#site-nav-topbar-wrapper > nav > div._SN-ak._SN-al._SN-am._SN-ax._SN-dt._SN-u._SN-w > a > img'), 'pageLogoImage')).toEqual(0);
    });
  });

  describe("verify links on the million more page", () => {
    it("verify redirection of url on click of logo", () => {
      WorkSpace.elementSelection("headerLogoLink").click();
      assert.equal(
        browser.getUrl(),
        "https://www.volvocars.com/intl",
        "Failed redirection on click of logo link"
      );
      browser.navigateTo(config.url);
    });
    it("verify redirection of learn more link", () => {
      WorkSpace.elementSelection("learnMoreLink").click();
      assert.equal(
        browser.getUrl(),
        "https://www.volvocars.com/intl/v/car-safety",
        "Failed redirection on click of learn more link"
      );
      browser.navigateTo(config.url);
    });
    it("verify redirection of recharge link", () => {
      WorkSpace.elementSelection("rechargeLink").click();
      assert.equal(
        browser.getUrl(),
        "https://www.volvocars.com/intl/v/cars/recharge",
        "Failed redirection on click of recharge link"
      );
      browser.navigateTo(config.url);
    });
    it("verify redirection of privacy link", () => {
      WorkSpace.elementSelection("privacyFooterLink").click();
      assert.equal(
        browser.getUrl(),
        "https://www.volvocars.com/intl/v/legal/privacy",
        "Failed redirection on click of privacy footer link"
      );
      browser.navigateTo(config.url);
    });
  });
});
