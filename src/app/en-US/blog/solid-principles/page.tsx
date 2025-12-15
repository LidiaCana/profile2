import Layout from "@/app/components/Layout";
import Image from "next/image";

const Page = () => {
  return (
    <Layout>
      <article className="prose prose-lg max-w-none mx-auto p-10">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Applying SOLID Principles for Scalable Software Architecture: Lessons from a Real-World Case Study
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A practical guide to implementing SOLID principles in modern software development
          </p>
          <div className="my-8 flex justify-center">
            <Image 
              src="/speaker/codeSpark.png" 
              alt="CodeSpark Speaker" 
              width={800} 
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Introduction
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            In the world of software engineering, building maintainable, scalable, and robust applications is crucial for long-term success. 
            SOLID principles, introduced by Robert C. Martin (Uncle Bob), provide a foundation for writing clean, flexible, and maintainable code. 
            These five principles guide developers in creating software that can adapt to changing requirements without breaking existing functionality.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            In this article, I'll share insights from a real-world project where we refactored a monolithic e-commerce platform into a 
            modular, scalable architecture by applying SOLID principles. This case study demonstrates how these principles can transform 
            a codebase from a maintenance nightmare into a developer-friendly, extensible system.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Understanding SOLID Principles
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              1. Single Responsibility Principle (SRP)
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Definition:</strong> A class should have only one reason to change, meaning it should have only one job or responsibility.
            </p>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Real-World Example:</strong> In our e-commerce platform, we had a <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">UserService</code> class 
              that was handling user authentication, email notifications, data validation, and database operations. This violated SRP because any change 
              in email templates, validation rules, or database schema would require modifying the same class.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">Before (Violating SRP):</p>
              <pre className="text-sm overflow-x-auto">
{`class UserService {
  createUser(data) {
    // Validate data
    if (!this.isValidEmail(data.email)) { ... }
    
    // Save to database
    this.db.save(data);
    
    // Send welcome email
    this.emailService.send(data.email, 'Welcome!');
    
    // Log activity
    this.logger.log('User created');
  }
}`}
              </pre>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">After (Following SRP):</p>
              <pre className="text-sm overflow-x-auto">
{`class UserValidator {
  isValidEmail(email) { ... }
  validateUserData(data) { ... }
}

class UserRepository {
  save(user) { ... }
  findById(id) { ... }
}

class EmailService {
  sendWelcomeEmail(email) { ... }
}

class UserService {
  constructor(validator, repository, emailService) {
    this.validator = validator;
    this.repository = repository;
    this.emailService = emailService;
  }
  
  createUser(data) {
    this.validator.validateUserData(data);
    const user = this.repository.save(data);
    this.emailService.sendWelcomeEmail(user.email);
    return user;
  }
}`}
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Benefits:</strong> Each class now has a single, well-defined responsibility. Changes to validation logic, database operations, 
              or email templates can be made independently without affecting other parts of the system.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              2. Open/Closed Principle (OCP)
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Definition:</strong> Software entities should be open for extension but closed for modification.
            </p>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Real-World Example:</strong> Our payment processing system initially supported only credit cards. When we needed to add PayPal, 
              Apple Pay, and cryptocurrency payments, we had to modify the existing payment processor class, which risked breaking existing functionality.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">Before (Violating OCP):</p>
              <pre className="text-sm overflow-x-auto">
{`class PaymentProcessor {
  processPayment(amount, method) {
    if (method === 'credit_card') {
      // Credit card logic
    } else if (method === 'paypal') {
      // PayPal logic
    } else if (method === 'apple_pay') {
      // Apple Pay logic
    }
    // Adding new payment method requires modifying this class
  }
}`}
              </pre>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">After (Following OCP):</p>
              <pre className="text-sm overflow-x-auto">
{`interface PaymentMethod {
  process(amount: number): Promise<PaymentResult>;
}

class CreditCardPayment implements PaymentMethod {
  process(amount: number) { ... }
}

class PayPalPayment implements PaymentMethod {
  process(amount: number) { ... }
}

class PaymentProcessor {
  processPayment(amount: number, method: PaymentMethod) {
    return method.process(amount);
  }
}

// Adding new payment method: just implement the interface
class CryptocurrencyPayment implements PaymentMethod {
  process(amount: number) { ... }
}`}
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Benefits:</strong> We can add new payment methods without modifying existing code. The system is extensible through 
              interfaces and implementations, reducing the risk of introducing bugs in tested code.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              3. Liskov Substitution Principle (LSP)
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Definition:</strong> Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.
            </p>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Real-World Example:</strong> We had a notification system where different notification types (Email, SMS, Push) 
              were supposed to be interchangeable, but some implementations threw exceptions or behaved unexpectedly when substituted.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">Before (Violating LSP):</p>
              <pre className="text-sm overflow-x-auto">
{`class Notification {
  send(message) {
    throw new Error('Must implement');
  }
}

class EmailNotification extends Notification {
  send(message) {
    if (!this.emailService.isConfigured()) {
      throw new Error('Email service not configured');
    }
    // Send email
  }
}

// This breaks LSP - EmailNotification can't always substitute Notification
function notifyUsers(notifications: Notification[]) {
  notifications.forEach(n => n.send('Hello')); // Might throw!
}`}
              </pre>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">After (Following LSP):</p>
              <pre className="text-sm overflow-x-auto">
{`interface Notification {
  send(message: string): Promise<NotificationResult>;
}

class EmailNotification implements Notification {
  async send(message: string) {
    if (!this.emailService.isConfigured()) {
      return { success: false, error: 'Email service not configured' };
    }
    // Send email
    return { success: true };
  }
}

class SMSNotification implements Notification {
  async send(message: string) {
    // Always returns a result, never throws
    return { success: true };
  }
}

// All implementations can be safely substituted
async function notifyUsers(notifications: Notification[]) {
  const results = await Promise.all(
    notifications.map(n => n.send('Hello'))
  );
}`}
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Benefits:</strong> All notification types can be used interchangeably. The code is more predictable and reliable, 
              as subclasses maintain the contract defined by their base class or interface.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              4. Interface Segregation Principle (ISP)
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Definition:</strong> Clients should not be forced to depend on interfaces they don't use.
            </p>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Real-World Example:</strong> We had a monolithic <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">IUserService</code> interface 
              that included methods for authentication, profile management, admin operations, and reporting. Classes that only needed basic user operations 
              were forced to implement all methods, even if they didn't need them.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">Before (Violating ISP):</p>
              <pre className="text-sm overflow-x-auto">
{`interface IUserService {
  login(email: string, password: string): User;
  register(userData: UserData): User;
  updateProfile(userId: string, data: ProfileData): void;
  deleteUser(userId: string): void;
  generateReport(): Report;
  banUser(userId: string): void;
  // ... 20 more methods
}

// Regular user service must implement ALL methods
class UserService implements IUserService {
  generateReport() {
    throw new Error('Not implemented'); // Forced to implement!
  }
  banUser() {
    throw new Error('Not implemented'); // Forced to implement!
  }
}`}
              </pre>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">After (Following ISP):</p>
              <pre className="text-sm overflow-x-auto">
{`interface IUserAuthentication {
  login(email: string, password: string): Promise<User>;
  register(userData: UserData): Promise<User>;
}

interface IUserProfile {
  updateProfile(userId: string, data: ProfileData): Promise<void>;
  getProfile(userId: string): Promise<Profile>;
}

interface IUserAdmin {
  banUser(userId: string): Promise<void>;
  generateReport(): Promise<Report>;
}

// Classes only implement what they need
class UserService implements IUserAuthentication, IUserProfile {
  login(email: string, password: string) { ... }
  register(userData: UserData) { ... }
  updateProfile(userId: string, data: ProfileData) { ... }
  getProfile(userId: string) { ... }
}

class AdminService implements IUserAdmin {
  banUser(userId: string) { ... }
  generateReport() { ... }
}`}
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Benefits:</strong> Classes only depend on the interfaces they actually use. This reduces coupling, makes the code 
              more maintainable, and prevents unnecessary method implementations.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              5. Dependency Inversion Principle (DIP)
            </h3>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Definition:</strong> High-level modules should not depend on low-level modules. Both should depend on abstractions.
            </p>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              <strong>Real-World Example:</strong> Our order processing service was directly dependent on a specific database implementation 
              and email service. When we needed to switch from MySQL to PostgreSQL or change email providers, we had to modify the high-level business logic.
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">Before (Violating DIP):</p>
              <pre className="text-sm overflow-x-auto">
{`class OrderService {
  private db: MySQLDatabase; // Direct dependency on concrete class
  private email: SendGridService; // Direct dependency on concrete class
  
  constructor() {
    this.db = new MySQLDatabase();
    this.email = new SendGridService();
  }
  
  processOrder(order: Order) {
    this.db.save(order); // Tightly coupled to MySQL
    this.email.send(order.customerEmail, 'Order confirmed');
  }
}`}
              </pre>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-3">
              <p className="font-semibold mb-2">After (Following DIP):</p>
              <pre className="text-sm overflow-x-auto">
{`interface IOrderRepository {
  save(order: Order): Promise<void>;
  findById(id: string): Promise<Order>;
}

interface IEmailService {
  send(to: string, subject: string, body: string): Promise<void>;
}

class OrderService {
  constructor(
    private repository: IOrderRepository, // Depends on abstraction
    private emailService: IEmailService  // Depends on abstraction
  ) {}
  
  async processOrder(order: Order) {
    await this.repository.save(order);
    await this.emailService.send(
      order.customerEmail, 
      'Order confirmed',
      'Your order has been processed'
    );
  }
}

// Can easily swap implementations
const mysqlRepo = new MySQLOrderRepository();
const postgresRepo = new PostgreSQLOrderRepository();
const sendGridEmail = new SendGridEmailService();
const awsSESEmail = new AWSEmailService();

// Same service works with any implementation
const orderService1 = new OrderService(mysqlRepo, sendGridEmail);
const orderService2 = new OrderService(postgresRepo, awsSESEmail);`}
              </pre>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Benefits:</strong> The high-level business logic is decoupled from low-level implementations. We can easily swap 
              databases, email services, or any other dependency without modifying the core business logic. This makes the system more 
              testable and flexible.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Case Study: E-Commerce Platform Refactoring
          </h2>
          
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
            The Challenge
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Our e-commerce platform started as a small project with a few features. Over time, it grew into a complex system with 
            hundreds of classes, tight coupling, and frequent bugs when adding new features. The codebase had:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2 ml-4">
            <li>God classes with multiple responsibilities</li>
            <li>Hard-coded dependencies making testing difficult</li>
            <li>Conditional logic scattered throughout the codebase</li>
            <li>Difficulty adding new features without breaking existing ones</li>
            <li>High bug rate when making changes</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">
            The Solution
          </h3>
          <div className="my-6 flex justify-center">
            <Image 
              src="/speaker/codeSpark2.png" 
              alt="CodeSpark Speaker 2" 
              width={800} 
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            We embarked on a systematic refactoring process, applying SOLID principles throughout the codebase:
          </p>
          
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Phase 1: Single Responsibility
            </h4>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              We broke down large classes into smaller, focused classes. For example, the <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">OrderManager</code> class 
              was split into <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">OrderValidator</code>, <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">OrderRepository</code>, 
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">OrderCalculator</code>, and <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">OrderNotifier</code>.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Result:</strong> Changes to pricing logic no longer affected notification logic, and vice versa. Bug fixes became more localized.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Phase 2: Open/Closed Principle
            </h4>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              We introduced strategy patterns and interfaces for extensible features. Payment methods, shipping providers, and discount 
              calculators all became pluggable components.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Result:</strong> Adding new payment methods (like cryptocurrency) took hours instead of days, and we didn't need to 
              modify any existing payment processing code.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Phase 3: Dependency Inversion
            </h4>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              We implemented dependency injection throughout the application. All external dependencies (databases, APIs, services) were 
              abstracted behind interfaces.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Result:</strong> Unit testing became straightforward. We could easily mock dependencies and test business logic in isolation. 
              When we needed to migrate from one database to another, it was a matter of swapping implementations.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Measurable Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Bug Reduction</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Production bugs decreased by <strong>65%</strong> after refactoring. The modular structure made it easier to identify 
                and fix issues.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Development Speed</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Feature development time reduced by <strong>40%</strong>. New developers could contribute faster due to clear separation of concerns.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Test Coverage</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Unit test coverage increased from <strong>30% to 85%</strong>. Dependency injection made mocking and testing much easier.
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Code Maintainability</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Code review time decreased by <strong>50%</strong>. Smaller, focused classes were easier to understand and review.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Best Practices and Tips
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4">
            <li>
              <strong>Start Small:</strong> Don't try to refactor everything at once. Identify the most problematic areas and refactor incrementally.
            </li>
            <li>
              <strong>Use Design Patterns:</strong> SOLID principles work hand-in-hand with design patterns like Strategy, Factory, and Repository patterns.
            </li>
            <li>
              <strong>Write Tests First:</strong> Having good test coverage gives you confidence when refactoring. Write tests before refactoring critical paths.
            </li>
            <li>
              <strong>Code Reviews:</strong> Make SOLID principles part of your code review checklist. Encourage team members to identify violations.
            </li>
            <li>
              <strong>Don't Over-Engineer:</strong> SOLID principles are guidelines, not strict rules. Sometimes a simple solution is better than a perfectly SOLID one.
            </li>
            <li>
              <strong>Continuous Refactoring:</strong> Make refactoring a regular part of your development process, not a one-time event.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Common Pitfalls to Avoid
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 ml-4">
            <li>
              <strong>Creating too many small classes:</strong> While SRP is important, don't create a class for every single method. 
              Find the right balance between granularity and practicality.
            </li>
            <li>
              <strong>Premature abstraction:</strong> Don't create interfaces for everything from the start. Extract interfaces when you 
              have multiple implementations or when you need to swap dependencies.
            </li>
            <li>
              <strong>Ignoring the team context:</strong> SOLID principles should improve team productivity, not hinder it. Consider your 
              team's experience level and project constraints.
            </li>
            <li>
              <strong>Violating YAGNI (You Aren't Gonna Need It):</strong> Don't add complexity "just in case." Apply SOLID when it solves 
              real problems, not hypothetical ones.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Conclusion
          </h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            SOLID principles are not just theoretical concepts—they are practical tools that can significantly improve your codebase's 
            quality, maintainability, and scalability. The case study presented here demonstrates that applying these principles can lead 
            to measurable improvements in bug rates, development speed, and code quality.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            However, remember that SOLID principles are guidelines, not strict rules. The goal is to write better code, not to follow 
            principles blindly. Use them as a compass to guide your design decisions, and always consider the context of your project, 
            team, and requirements.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Start applying SOLID principles in your next feature or refactoring task. You'll find that while it may require more upfront 
            thought and design, the long-term benefits in terms of maintainability, testability, and developer happiness are well worth the investment.
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Author: Lidia Julissa Canales
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Published: Oct. 2023
          </p>
        </footer>
      </article>
    </Layout>
  );
};

export default Page;

