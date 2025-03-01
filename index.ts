//TASK #1 | LEVEL #1

enum Role {
    ADMIN = 10,
    MODERATOR = 20,
    CUSTOMER = 30
  }
  
  class User {
    public readonly id: number;
    private name: string;
    private email: string;
    private role: Role;
  
    constructor(name: string, email: string, role: Role) {
      this.id = Math.floor(Math.random() * 1000);
      this.setName(name);
      this.setEmail(email);
      this.role = role;
    }
  
    public setName(name: string): void {
      if (name.length > 4) {
        this.name = name;
      } else {
        throw new Error("Ім’я повинно містити більше 4 символів");
      }
    }
  
    public getName(): string {
      return this.name;
    }
  
    public setEmail(email: string): void {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        this.email = email;
      } else {
        throw new Error("Невірний формат email");
      }
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public setRole(role: Role): void {
      this.role = role;
    }
  
    public getRole(): Role {
      return this.role;
    }
  
    public getFullData(): string[] {
      return [this.id.toString(), this.name, this.email, this.role.toString()];
    }
  }
  
  class Comment {
    private text: string;
    private user: User;
    private rating: number;
  
    constructor(text: string, user: User, rating: number) {
      this.setText(text);
      this.user = user;
      this.setRating(rating);
    }
  
    public setText(text: string): void {
      if (text.length > 4) {
        this.text = text;
      } else {
        throw new Error("Коментар повинен містити більше 4 символів");
      }
    }
  
    public getText(): string {
      return this.text;
    }
  
    public getUser(): User {
      return this.user;
    }
  
    public setRating(rating: number): void {
      if (rating >= 1 && rating <= 5) {
        this.rating = rating;
      } else {
        throw new Error("Рейтинг повинен бути від 1 до 5");
      }
    }
  
    public getRating(): number {
      return this.rating;
    }
  }
  
  class Product {
    public readonly id: number;
    private name: string;
    private quantity: number;
    private price: number;
    private description?: string;
    private tags: string[];
    private comments: Comment[];
  
    constructor(
      name: string,
      quantity: number,
      price: number,
      tags: string[],
      description?: string
    ) {
      this.id = Math.floor(Math.random() * 1000);
      this.setName(name);
      this.setQuantity(quantity);
      this.setPrice(price);
      this.description = description;
      this.tags = tags;
      this.comments = [];
    }
  
    public setName(name: string): void {
      if (name.length > 4) {
        this.name = name;
      } else {
        throw new Error("Назва продукту повинна містити більше 4 символів");
      }
    }
  
    public getName(): string {
      return this.name;
    }
  
    public setQuantity(quantity: number): void {
      if (quantity >= 0) {
        this.quantity = quantity;
      } else {
        throw new Error("Кількість не може бути від’ємною");
      }
    }
  
    public getQuantity(): number {
      return this.quantity;
    }
  
    public setPrice(price: number): void {
      if (price > 0) {
        this.price = price;
      } else {
        throw new Error("Ціна повинна бути більше 0");
      }
    }
  
    public getPrice(): number {
      return this.price;
    }
  
    public setDescription(description: string): void {
      this.description = description;
    }
  
    public getDescription(): string | undefined {
      return this.description;
    }
  
    public getTags(): string[] {
      return this.tags;
    }
  
    public setTags(tags: string[]): void {
      this.tags = tags;
    }
  
    public getComments(): Comment[] {
      return this.comments;
    }
  
    public addComment(comment: Comment): void {
      this.comments.push(comment);
    }
  }
  
  const user1 =  new User("Masha", "masha@example.com", Role.CUSTOMER);
  const user2  =  new User("Alexander", "alex@example.com", Role.CUSTOMER);
  
  
  const product =  new Product("Smartphone", 100, 499.99, ["Electronics", "Mobile"]);
  
  
  const comment1 =  new Comment(" Xeljjdbq ntktajy!", user1, 5);
  const comment2 =  new Comment("Не коштує своїх грошей!!!", user2, 2);
  
  product.addComment(comment1);
  product.addComment(comment2);
  
  console.log(product.getComments().map(c => `${c.getUser().getName()} сказав: "${c.getText()}", рейтинг: ${c.getRating()}`));
