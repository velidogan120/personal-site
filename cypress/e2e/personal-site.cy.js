/* global describe, beforeEach, it, cy */
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("page loads", () => {
    cy.contains("Creative thinker Minimalism lover");
  });

  it("fetch skills", () => {
    cy.intercept(
      "GET",
      "https://69b09731c63dd197febc9c97.mockapi.io/api/skills*",
      {
        statusCode: 200,
        body: [
          {
            id: 1,
            title: "JavaScript",
            description:
              "Modern web uygulamalarının temel taşı olan dinamik ve çok yönlü programlama dili.",
            lang: "tr",
          },
          {
            id: 12,
            title: "JavaScript",
            description:
              "A dynamic and versatile programming language that is the backbone of modern web applications.",
            lang: "en",
          },
        ],
      },
    ).as("getSkills");

    cy.wait("@getSkills");
    cy.contains("Skills loading...");
    cy.get("body")
      .invoke("text")
      .should("satisfy", (text) => {
        return (
          text.includes(
            "Modern web uygulamalarının temel taşı olan dinamik ve çok yönlü programlama dili.",
          ) ||
          text.includes(
            "A dynamic and versatile programming language that is the backbone of modern web applications.",
          )
        );
      });
  });

  it("fetch projects", () => {
    cy.intercept(
      "GET",
      "https://69b09731c63dd197febc9c97.mockapi.io/api/projects*",
      {
        statusCode: 200,
        body: [
          {
            id: 1,
            title: "Workintech",
            description:
              "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            tags: ["react", "redux", "axios"],
            links: {
              github: "https://github.com/velidogan120",
              view_site: "https://workintech-example.com",
            },
            image: "./1.png",
          },
        ],
      },
    ).as("getProjects");

    cy.wait("@getProjects");
    cy.contains("Projects loaded!");
    cy.contains("Workintech").should("be.visible");
    cy.get("body")
      .invoke("text")
      .should("satisfy", (text) => {
        return (
          text.includes(
            "Basit, özelleştirilebilir ve minimal kurulum gerektiren bir çerez (cookie) eklentisidir; kullanıcılarınız hangi çerezleri kabul edip hangilerini reddedeceğini seçebilir. Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur. NPM paketi olarak mevcuttur ve Git deposu kod ve tema üzerinde her türlü özelleştirmeye olanak tanır.",
          ) ||
          text.includes(
            "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          )
        );
      });
  });
});
