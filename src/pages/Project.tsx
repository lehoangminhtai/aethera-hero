import { Helmet } from 'react-helmet-async';
import { useEffect, useRef } from 'react';
import { 
  Zap, 
  Shield, 
  Database, 
  MessageSquare, 
  Activity,
  Server,
  Cloud,
  Code,
  ArrowRight,
  Github,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  Star
} from 'lucide-react';

const Project = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Microservices Fintech System | Portfolio Project</title>
        <meta name="description" content="Full-stack microservices fintech platform built with Node.js, Kafka, PostgreSQL, and real-time Socket.IO. Complete with authentication, transactions, and analytics." />
        <meta name="keywords" content="portfolio project, microservices nodejs, fintech system, kafka event streaming, distributed systems, full stack development" />
        <link rel="canonical" href="https://portfolio-le-hoang-minh-tai.vercel.app/project" />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  Featured Project
                </div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Server className="w-4 h-4" />
                  Full-Stack Development
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Microservices
                  <span className="block text-blue-600">Fintech Platform</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A complete fintech system built with modern distributed architecture. 
                  Features user authentication, financial transactions, real-time updates, and comprehensive analytics.
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-600">Tech Stack</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <div className="text-xs text-gray-500">Technologies</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-600">Services</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">6</div>
                  <div className="text-xs text-gray-500">Microservices</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium text-gray-600">Duration</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-xs text-gray-500">Months</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-gray-600">Complexity</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">Advanced</div>
                  <div className="text-xs text-gray-500">Level</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 bg-white shadow-sm border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Event-Driven Architecture
                </span>
                <span className="flex items-center gap-2 bg-white shadow-sm border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                  <Shield className="w-4 h-4 text-green-500" />
                  Production Security
                </span>
                <span className="flex items-center gap-2 bg-white shadow-sm border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
                  <MessageSquare className="w-4 h-4 text-purple-500" />
                  Real-time Features
                </span>
              </div>

              <div className="flex gap-4">
                <a href="#architecture" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  View Architecture
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://github.com/lehoangminhtai/microservices-fintech" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div ref={heroRef} className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">System Architecture</h3>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-600 mb-2">graph TD</div>
                    <div className="space-y-1 text-xs">
                      <div>A[Nginx :80] → B[Frontend :3000]</div>
                      <div>A → C[Auth :3001]</div>
                      <div>A → D[User :3002]</div>
                      <div>A → E[Account :3003]</div>
                      <div>A → F[Transaction :3004]</div>
                      <div>B → G[Realtime :3010]</div>
                      <div>C → H[Kafka Topics]</div>
                      <div>H → I[Analytics]</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Database className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-xs font-medium">PostgreSQL</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Cloud className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="text-xs font-medium">Kafka</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Activity className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-xs font-medium">Socket.IO</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500 rounded-full opacity-10 animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600">Core capabilities and technical highlights of the platform</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Event-Driven Architecture</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">ACTIVE</span>
                </div>
              </div>
              <div className="space-y-2">
                <div>✓ Kafka-based event streaming</div>
                <div>✓ Asynchronous service communication</div>
                <div>✓ Event sourcing for audit trails</div>
                <div>✓ Real-time data processing</div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold text-gray-900">Security & Authentication</span>
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">JWT Tokens</span>
                  <span className="font-medium text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Refresh Tokens</span>
                  <span className="font-medium text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Role-based Access</span>
                  <span className="font-medium text-green-600">✓</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Token Blacklisting</span>
                  <span className="font-medium text-green-600">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section id="architecture" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">System Architecture</h2>
            <p className="text-xl text-gray-600">Six specialized services working in harmony</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Auth Service</h3>
              <p className="text-gray-600 text-sm">JWT authentication with refresh tokens, bcrypt hashing, and Kafka event publishing.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Account Service</h3>
              <p className="text-gray-600 text-sm">Ledger-based balance management with double-entry accounting and real-time updates.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transaction Service</h3>
              <p className="text-gray-600 text-sm">Saga orchestrator for distributed money transfers with compensation logic.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Realtime Service</h3>
              <p className="text-gray-600 text-sm">Kafka to Socket.IO bridge for instant UI updates and user-specific rooms.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics Service</h3>
              <p className="text-gray-600 text-sm">Event consumption with idempotent processing and JSONB storage.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">User Service</h3>
              <p className="text-gray-600 text-sm">Profile management with JWT verification and event-driven updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-gray-600">Modern tools for scalable, reliable systems</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Node.js', icon: Code, color: 'text-green-600' },
              { name: 'Kafka', icon: Cloud, color: 'text-blue-600' },
              { name: 'PostgreSQL', icon: Database, color: 'text-blue-700' },
              { name: 'Redis', icon: Zap, color: 'text-red-600' },
              { name: 'Socket.IO', icon: MessageSquare, color: 'text-purple-600' },
              { name: 'Docker', icon: Server, color: 'text-cyan-600' }
            ].map((tech) => (
              <div key={tech.name} className="text-center group">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-100 transition-colors">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <div className="text-sm font-medium text-gray-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
            <p className="text-gray-600">Deep dive into the project's technical architecture and implementation details</p>
          </div>
          <article className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction to the System</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This microservices architecture represents a comprehensive approach to building scalable, resilient financial systems. 
                Drawing from real-world banking and fintech patterns, the system demonstrates how to handle complex distributed transactions, 
                real-time user experiences, and robust data consistency in a production environment.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The project began as an exploration of modern distributed systems patterns but evolved into a fully functional 
                demonstration of enterprise-grade architecture. Each service follows domain-driven design principles, with clear 
                boundaries and responsibilities that allow for independent scaling and deployment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Event-Driven Design with Kafka</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Apache Kafka serves as the backbone of our event-driven architecture, enabling asynchronous communication between services. 
                Unlike traditional REST APIs that create tight coupling, Kafka's publish-subscribe model allows services to operate 
                independently while still maintaining data consistency through events.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The system uses multiple Kafka topics for different event types: user-events for authentication activities, 
                transaction-events for money transfers, and account-events for balance updates. Each topic is configured with 
                appropriate partitions for parallel processing and retention policies to handle replay scenarios during system recovery.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Event sourcing plays a crucial role here. Every state change in the system is captured as an immutable event, 
                providing an audit trail and enabling powerful features like event replay for debugging and system reconstruction.
              </p>
              
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm mb-6">
                <div className="text-yellow-400 mb-2">📨 Sample Kafka Event:</div>
                <pre>{`{
  "topic": "user-events",
  "partition": 0,
  "offset": 12345,
  "key": "user-456",
  "value": {
    "eventType": "USER_REGISTERED",
    "userId": "456",
    "email": "user@example.com",
    "timestamp": "2026-04-16T10:00:00Z",
    "metadata": {
      "source": "auth-service",
      "version": "1.0",
      "correlationId": "req-789"
    }
  }
}`}</pre>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                The event structure includes metadata for tracing and correlation, essential for debugging distributed systems. 
                Consumer groups ensure that multiple instances of the same service can process events in parallel without duplication.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Authentication Flow</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Security in distributed systems requires careful consideration of token management, session handling, and cross-service authentication. 
                Our JWT implementation uses a dual-token approach: short-lived access tokens for API calls and longer-lived refresh tokens for seamless user experience.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Access tokens expire in 15 minutes to minimize the impact of token theft, while refresh tokens last 7 days and are stored securely in Redis. 
                This approach balances security with usability, allowing users to stay logged in without frequent re-authentication.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Auth Service handles registration and login, using bcrypt for password hashing with a high work factor to resist brute-force attacks. 
                Upon successful authentication, it publishes events to Kafka for analytics and audit purposes.
              </p>
              
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm mb-6">
                <div className="text-yellow-400 mb-2">🔑 JWT Payload Structure:</div>
                <pre>{`{
  "sub": "user-456",
  "email": "user@example.com",
  "role": "customer",
  "permissions": ["read", "transfer"],
  "iat": 1713264000,
  "exp": 1713264900,
  "iss": "auth-service",
  "aud": "api-gateway"
}`}</pre>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                Each service validates JWTs independently using shared public keys, eliminating the need for centralized session management. 
                Token blacklisting is implemented for compromised tokens, with Redis providing fast lookups for revocation checks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Saga Pattern for Transactions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Distributed transactions in microservices present unique challenges. Traditional two-phase commit protocols don't scale well and create tight coupling. 
                The Saga pattern provides an elegant solution by orchestrating a series of local transactions, each with a corresponding compensation action.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In our implementation, the Transaction Service acts as the saga orchestrator, coordinating the money transfer process across multiple services. 
                Each step in the saga is tracked with unique identifiers, allowing for precise error handling and rollback procedures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The saga maintains state in a dedicated database table, recording each step's status and any relevant data. 
                If a step fails, the orchestrator triggers compensation actions in reverse order, ensuring the system returns to a consistent state.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border mb-6">
                <h3 className="font-semibold mb-4">🔄 Complete Transaction Saga Flow</h3>
                <pre className="font-mono text-sm text-gray-700">
{`1. Frontend → Transaction Service: POST /transfer
   - Validate request, check balances
   - Create saga record with PENDING status

2. Transaction Service → Kafka: transfer-initiated
   - Publish event with saga ID and transfer details

3. Account Service ← Kafka: transfer-initiated
   - Validate sender balance
   - Debit amount from sender account
   - Create ledger entries (DR sender, CR suspense)
   - Publish debit-completed event

4. Account Service: Credit receiver
   - Credit amount to receiver account
   - Update ledger entries (CR receiver, DR suspense)
   - Publish credit-completed event

5. Transaction Service ← Kafka: credit-completed
   - Update saga status to COMPLETED
   - Send success response to frontend

Failure Scenario:
- If debit fails: Publish debit-failed, compensate by releasing locks
- If credit fails: Publish credit-failed, compensate by crediting sender back
- Saga status set to COMPENSATED`}
                </pre>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                This pattern ensures eventual consistency while maintaining business invariants. The use of Kafka for event-driven communication 
                allows each service to react asynchronously, improving overall system resilience and scalability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Time Communication with Socket.IO</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Modern financial applications require instant feedback for user actions. Socket.IO provides bidirectional communication 
                between clients and servers, enabling real-time updates without polling. Our Realtime Service acts as a bridge between 
                Kafka events and WebSocket connections.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Users connect to specific rooms based on their IDs, receiving personalized updates about their accounts and transactions. 
                JWT authentication ensures that users only receive events relevant to their accounts, maintaining security and privacy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The service handles connection lifecycle events, implementing reconnection logic and heartbeat monitoring to maintain 
                stable connections even in unreliable network conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Consistency and Idempotency</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In distributed systems, ensuring data consistency across services is challenging. We employ eventual consistency for most operations, 
                accepting that temporary inconsistencies may occur but will eventually resolve.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Idempotency is crucial for reliable event processing. The Analytics Service uses a composite key of (topic, partition, offset) 
                to detect and skip duplicate events. This ensures that system failures don't result in duplicate processing or data corruption.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                PostgreSQL's ACID properties provide strong consistency within individual services, while cross-service consistency relies 
                on the saga pattern and event-driven reconciliation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Infrastructure and Deployment</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The system runs on a containerized infrastructure using Docker for service isolation and Kubernetes for orchestration. 
                Nginx serves as the API gateway, handling load balancing, SSL termination, and request routing to appropriate services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Monitoring is implemented using Prometheus for metrics collection and Grafana for visualization. Distributed tracing with 
                Jaeger helps debug complex request flows across multiple services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The deployment pipeline uses GitOps principles with ArgoCD for automated deployments and rollbacks, ensuring reliable 
                and consistent releases across environments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges and Solutions</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Building this system revealed several challenges inherent to distributed systems. Network partitions, service failures, 
                and data consistency issues required careful design decisions and robust error handling.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                One significant challenge was managing distributed transactions. The saga pattern provided a solution, but implementing 
                compensation logic required deep understanding of business requirements and failure scenarios.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Event ordering and exactly-once processing in Kafka required careful configuration of consumer groups and offset management. 
                Testing distributed systems proved complex, requiring sophisticated test harnesses that could simulate network failures and service outages.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Despite these challenges, the resulting system demonstrates the power of microservices architecture when properly implemented. 
                The modular design allows for independent scaling, easier testing, and more resilient operations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance and Scalability</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The architecture is designed for horizontal scalability. Each service can be scaled independently based on load patterns. 
                Kafka's partitioning allows for parallel processing of events, while Redis provides fast caching for frequently accessed data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Load testing revealed that the system can handle thousands of concurrent users with sub-100ms response times for most operations. 
                The event-driven nature allows the system to absorb traffic spikes by queuing events for later processing.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Database performance is optimized through proper indexing, connection pooling, and read replicas. The ledger system in the 
                Account Service ensures fast balance calculations and audit trails.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Considerations</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Security is paramount in financial systems. All services implement defense-in-depth strategies with multiple layers of protection. 
                JWT tokens are validated on every request, and sensitive data is encrypted both at rest and in transit.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The API gateway implements rate limiting and request validation, while services use parameterized queries to prevent SQL injection. 
                Audit logging captures all significant actions for compliance and forensic analysis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Regular security assessments and dependency updates ensure the system remains protected against emerging threats.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Enhancements</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The system provides a solid foundation for future enhancements. Planned features include machine learning-based fraud detection, 
                multi-currency support, and integration with external payment providers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The modular architecture makes it easy to add new services for features like notifications, reporting, and compliance management. 
                The event-driven design allows for easy integration with third-party systems and APIs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                As the system evolves, monitoring and observability will continue to be enhanced, providing deeper insights into system behavior 
                and user patterns.
              </p>
            </div>

            <div className="text-center pt-12">
              <div className="space-y-4">
                <a href="https://github.com/lehoangminhtai/microservices-fintech" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg mr-4">
                  <Github className="w-5 h-5" />
                  View Source Code
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-sm text-gray-500">Check out the complete implementation on GitHub</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Project;