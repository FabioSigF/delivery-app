export default defineEventHandler((event) => {
  return {
    company: {
      name: "Burguer King",
      logo: "/images/logo.png",
      address: {
        street: "Av. Floriano Peixoto",
        number: "998",
        district: "Santa Mônica",
        city: "Uberlândia",
        state: "Minas Gerais",
        country: "Brasil",
      },
      marketing: {
        slogan: "Do jeito que você gosta",
      },
      categories: [
        {
          name: "Hamburgueres",
          id: 101,
        },
        {
          name: "Frango e Peixe",
          id: 102,
        },
        {
          name: "Acompanhamentos",
          id: 103,
        },
        {
          name: "Bebidas",
          id: 104,
        },
        {
          name: "Sobremesas",
          id: 105,
        },
      ],
      products: [
        {
          id: 1,
          name: "Whopper",
          price: 5.99,
          promotional_price: 4.99,
          images: ["whopper1.jpg", "whopper2.jpg"],
          business_id: 101,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 2,
          name: "Double Whopper",
          price: 6.99,
          promotional_price: 5.99,
          images: ["double_whopper1.jpg", "double_whopper2.jpg"],
          business_id: 101,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 3,
          name: "Whopper Jr.",
          price: 4.99,
          promotional_price: 3.99,
          images: ["whopper_jr1.jpg", "whopper_jr2.jpg"],
          business_id: 101,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 4,
          name: "Bacon King",
          price: 7.99,
          promotional_price: 6.99,
          images: ["bacon_king1.jpg", "bacon_king2.jpg"],
          business_id: 101,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },

        {
          id: 5,
          name: "Original Chicken Sandwich",
          price: 4.99,
          promotional_price: 3.99,
          images: ["original_chicken1.jpg", "original_chicken2.jpg"],
          business_id: 102,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 6,
          name: "Crispy Chicken Sandwich",
          price: 5.49,
          promotional_price: 4.49,
          images: ["crispy_chicken1.jpg", "crispy_chicken2.jpg"],
          business_id: 102,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 7,
          name: "Spicy Crispy Chicken Sandwich",
          price: 5.99,
          promotional_price: 4.99,
          images: ["spicy_crispy_chicken1.jpg", "spicy_crispy_chicken2.jpg"],
          business_id: 102,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 8,
          name: "Big Fish Sandwich",
          price: 5.49,
          promotional_price: 4.49,
          images: ["big_fish1.jpg", "big_fish2.jpg"],
          business_id: 102,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 9,
          name: "Batatas Fritas",
          price: 2.49,
          promotional_price: 1.99,
          images: ["batatas_fritas1.jpg", "batatas_fritas2.jpg"],
          business_id: 103,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 10,
          name: "Onion Rings",
          price: 2.99,
          promotional_price: 2.49,
          images: ["onion_rings1.jpg", "onion_rings2.jpg"],
          business_id: 103,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 11,
          name: "Palitos de Mussarela",
          price: 3.49,
          promotional_price: 2.99,
          images: ["palitos_mussarela1.jpg", "palitos_mussarela2.jpg"],
          business_id: 103,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 12,
          name: "Nuggets de Frango",
          price: 3.99,
          promotional_price: 3.49,
          images: ["nuggets_frango1.jpg", "nuggets_frango2.jpg"],
          business_id: 103,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },

        {
          id: 13,
          name: "Coca-Cola",
          price: 1.99,
          promotional_price: 1.49,
          images: ["coca_cola1.jpg", "coca_cola2.jpg"],
          business_id: 104,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 14,
          name: "Coca-Cola Zero",
          price: 1.99,
          promotional_price: 1.49,
          images: ["coca_cola_zero1.jpg", "coca_cola_zero2.jpg"],
          business_id: 104,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 15,
          name: "Sprite",
          price: 1.99,
          promotional_price: 1.49,
          images: ["sprite1.jpg", "sprite2.jpg"],
          business_id: 104,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 16,
          name: "Guaraná Mineiro",
          price: 1.99,
          promotional_price: 1.49,
          images: ["guarana_mineiro1.jpg", "guarana_mineiro2.jpg"],
          business_id: 104,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },

        {
          id: 17,
          name: "Soft Serve Cone",
          price: 1.49,
          promotional_price: 0.99,
          images: ["soft_serve1.jpg", "soft_serve2.jpg"],
          business_id: 105,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 18,
          name: "Sundae",
          price: 2.49,
          promotional_price: 1.99,
          images: ["sundae1.jpg", "sundae2.jpg"],
          business_id: 105,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 19,
          name: "Hershey's Sundae Pie",
          price: 2.49,
          promotional_price: 1.99,
          images: ["sundae_pie1.jpg", "sundae_pie2.jpg"],
          business_id: 105,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
        {
          id: 20,
          name: "Oreo Shake",
          price: 3.49,
          promotional_price: 2.99,
          images: ["oreo_shake1.jpg", "oreo_shake2.jpg"],
          business_id: 105,
          created_at: "2024-07-08T12:00:00Z",
          updated_at: "2024-07-08T12:00:00Z",
          deleted: false,
        },
      ],
    },
  };
});
