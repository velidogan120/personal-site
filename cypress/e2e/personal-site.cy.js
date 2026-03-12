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
            title: "E-Commerce",
            description:
              "A simple and modern e-commerce interface example. It includes essential UI components such as product listing, product detail views, and basic user interactions. The layout is built using responsive design principles to ensure compatibility across different screen sizes. Developed with HTML, CSS, and Bootstrap as a customizable front-end project.",
            tags: ["react", "redux", "axios"],
            links: {
              github: "https://github.com/velidogan120",
              view_site: "https://velidogan120.github.io/E-commerce/",
            },
            image: "./1.png",
          },
        ],
      },
    ).as("getProjects");

    cy.wait("@getProjects");
    cy.contains("Projects loaded!");
    cy.contains("E-Commerce").should("be.visible");
    cy.get("body")
      .invoke("text")
      .should("satisfy", (text) => {
        return (
          text.includes(
            "Basit ve modern bir e-ticaret arayüzü örneğidir. Ürün listeleme, detay görüntüleme ve kullanıcı etkileşimleri için temel UI bileşenleri içerir. Responsive tasarım prensipleri kullanılarak geliştirilmiştir ve farklı ekran boyutlarında uyumlu çalışır. HTML, CSS ve Bootstrap kullanılarak oluşturulmuş, geliştirilebilir bir ön yüz projesidir.",
          ) ||
          text.includes(
            "A simple and modern e-commerce interface example. It includes essential UI components such as product listing, product detail views, and basic user interactions. The layout is built using responsive design principles to ensure compatibility across different screen sizes. Developed with HTML, CSS, and Bootstrap as a customizable front-end project.",
          )
        );
      });
  });
});
