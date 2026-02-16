import React, { useEffect, useMemo, useState } from "react";
import heroImg from "./assets/hero.jpg";
import awsImg from "./assets/aws.jpg";
import profileImg from "./assets/profile.jpg";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Cloud, Wrench, Server, Brain, ExternalLink } from "lucide-react";


const profile = {
  name: "Shivangi Pandey",
  title: " Cloud Engineer and Cloud Solution Architect ",
  location: "Dublin, Ireland",
  links: [
    { label: "GitHub", icon: Github, href: "https://github.com/Techfay/" },
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/shivangi-pandey-4074181b0/" },
    { label: "Email", icon: Mail, href: "mailto:shivangipandey0142@gmail.com" },
    { label: "Phone", icon: Phone, href: "+353899699984" },
     
  ],
};


const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "What I Do" },
  { id: "certifications", label: "Certifications" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Portfolio" },
  { id: "career", label: "Career Experience" }, 
  { id: "education", label: "Education" },
  { id: "contact", label: "Get In Touch" },
];

// simple smooth scroll
const NavLink = ({ href, children }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }}
    className="block px-4 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/70 transition"
  >
    {children}
  </a>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs sm:text-sm mr-2 mb-2">
    {children}
  </span>
);

export default function App() {
  // (optional) typing effect text list
  const roles = ["Shivangi Pandey", "Cloud Engineer", "Senior Systems Engineer", "Solution Architect", "Platform Engineer", "DevOps Engineer", "SRE-minded Engineer"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* LAYOUT: sidebar + content */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[300px,1fr]">
        {/* Sidebar */}
        <aside className="lg:min-h-screen lg:sticky lg:top-0 lg:self-start bg-slate-900/60 border-r border-slate-800 p-6">
          <div className="flex flex-col items-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover ring-2 ring-slate-700"
            />
            <h1 className="mt-4 text-2xl font-semibold text-white">
              {profile.name}
            </h1>
            <p className="mt-1 text-slate-300">{profile.title}</p>

            <nav className="mt-8 w-full">
              {sections.map((s) => (
                <NavLink key={s.id} href={`#${s.id}`}>
                  {s.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-8 flex items-center gap-3">
              {profile.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l.label}
                  className="p-2 rounded-md border border-slate-700 hover:bg-slate-800"
                >
                  <l.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </aside>

        

        {/* Main content */}
        <main className="min-h-screen">
          {/* HERO */}
          <section id="home" className="relative">
            <div
              className="relative h-[85vh] min-h-[480px] flex items-center"
              style={{
                backgroundImage: `url(${heroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
              }}
            >
              {/* dark blur overlay */}
              <div className="absolute inset-0 bg-slate-950/60" />
              <div className="relative z-10 px-6 py-8 max-w-4xl">
                <div className="text-center lg:text-left">
                  <div className="text-slate-300 text-lg mb-3">Welcome</div>
                  <h2 className="text-4xl sm:text-6xl font-extrabold leading-[1.1]">
                    I’m {" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                      {roles[idx]}
                    </span>
                  </h2>
                  <p className="mt-6 text-xl text-slate-200 flex items-center justify-center lg:justify-start gap-2">
                    <MapPin className="w-5 h-5 opacity-80" />
                    Based in <span className="font-medium">Ireland</span>
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-slate-900 font-semibold bg-cyan-400 hover:bg-cyan-300 transition"
                    >
                      Hire Me
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-slate-700 hover:bg-slate-800 transition"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="px-6 py-12 border-b border-slate-800">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-slate-200/90 max-w-3xl mb-6">
              I’m Shivangi Pandey, a Cloud Engineer & Solution Architect passionate about building scalable and secure cloud solutions.
            </p>
            
            <p className="text-slate-200/90 max-w-3xl mb-6">
             With 5+ years of professional experience, I previously worked as a Senior Systems Engineer (Senior Platform Engineer) at Infosys, where I supported Intel’s global infrastructure operations. During this time, I gained hands-on expertise in managing hybrid cloud environments (AWS, Azure, and on-premises) and accelerating cloud adoption through automation and modern DevOps practices.
            </p>
            
            <p className="text-slate-200/90 max-w-3xl mb-6">
            My expertise spans Amazon Web Services (AWS), where I design and manage scalable solutions using EC2, S3, IAM, VPC, Lambda, and CloudWatch. My skill set extends to Infrastructure as Code (CloudFormation, Terraform, Ansible), CI/CD pipelines (GitHub Actions, AWS CodePipeline), and containerization with Docker and Kubernetes.
            </p>
            
            <p className="text-slate-200/90 max-w-3xl mb-6">
            Beyond cloud, I bring strong experience in server lifecycle management, virtualization (VMware vSphere, Hyper-V, vRA), and observability with CloudWatch, Datadog, Grafana, and Prometheus. Security is central to my work, with proven ability in IAM, MFA, RBAC, TLS/SSL, and compliance alignment.
            </p>
            
            <p className="text-slate-200/90 max-w-3xl mb-6">
            I am passionate about building secure, reliable, and cost-efficient hybrid cloud architectures that bridge traditional IT operations with modern cloud-native solutions—delivering measurable business impact through automation, scalability, and resilience.
            </p>

            <p className="text-slate-200/90 max-w-3xl mb-6">
             Currently based in Dublin, Ireland, I hold a <span className="font-semibold">Stamp 1G Graduate Visa</span>, and am fully eligible to work in Ireland.
             </p>
          </section>

          <section id="stats" className="px-6 py-16 bg-slate-900 border-b border-slate-800">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center">
    <div className="px-4 py-6 border-r border-slate-700 last:border-r-0">
      <h2 className="text-4xl font-bold text-slate-200">5+</h2>
      <p className="mt-2 text-slate-400">Years IT Experience</p>
    </div>
    <div className="px-4 py-6 border-r border-slate-700 last:border-r-0">
      <h2 className="text-4xl font-bold text-slate-200">250+</h2>
      <p className="mt-2 text-slate-400">Workloads Supported (Hybrid Cloud Infrastructure)</p>
    </div>
    <div className="px-4 py-6 border-r border-slate-700 last:border-r-0">
      <h2 className="text-4xl font-bold text-slate-200">5+</h2>
      <p className="mt-2 text-slate-400">Portfolio Projects</p>
    </div>
    
    <div className="px-4 py-6">
      <h2 className="text-4xl font-bold text-slate-200">10+</h2>
      <p className="mt-2 text-slate-400">Professional Certifications & Badges (including 5x AWS, 3x Azure)</p>
    </div>
  </div>
</section>


          {/* WHAT I DO / SKILLS */}
          <section id="skills" className="px-6 py-12 border-b border-slate-800">
            <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Cloud</div>
                {["AWS - EC2, S3, IAM, VPC, CloudWatch, Route53, Lambda, Serverless, LoadBalancer, AutoScaling", "Azure - VMs, IAM, Storage, IoT Hub", "GCP (Exposure)", "Oracle (Exposure)"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Operating Systems & Virtualization</div>
                {["Windows Server (2016–2022)", "Linux (RHEL, Ubuntu, CentOS)","VMware","vSphere/ESXi", "Hyper-V", "vRealize Automation", "Oracle VirtualBox"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
               <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Programming & Scripting</div>
                {[ "Python","C","HTML & CSS", "Java (Exposure)", "Django", "PowerShell","Bash", "YAML", "JSON"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">DevOps & IaC</div>
                {[ "AWS CI/CD","Terraform","Ansible", "CloudFormation", "GitHub Actions", "Jenkins"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Containers</div>
                {["Docker", "Kubernetes", "EKS/AKS"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Monitoring & Observability</div>
                {["CloudWatch","DataDog","NewRelic", "Grafana", "Prometheus"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Security & Compliance</div>
                {["IAM", "RBAC", "MFA", "Encryption", "TLS/SSL", "Vulnerability Scanning", "GPOs"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Networking</div>
                {["Route53", "DNS", "DHCP", "HTTP/HTTPS", "TCP/IP", "Load Balancer", "VLAN", "VPN", "VPC Routing", "Firewall"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Database & Storage</div>
                {["MYSQL", "SQLite", "AWS S3"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">WebServers & API</div>
                {["Apache", "WordPress", "Tomcat", "NGINX", "RESTFul APIs"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Tools & Methodologies</div>
                {["ITIL","ServiceNow", "Jira", "SDLC", "Agile/Scrum", "BigFix", "SLA Compliance","MS Excel", "MS PowerPoint"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Machine Learning </div>
                {["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "SageMaker","ML Algorithms", "Google Colab"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="text-lg font-medium mb-2">Blockchain </div>
                {["Cryptocurrency", "MetaMask", "Remix", "Ethereum (ERC20, ERC721)", "Ganache", "Hyperledger"].map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
            
          </section>

          {/* Certifications (placeholder) */}
          <section id="certifications" className="px-6 py-12 border-b border-slate-800">
            <h3 className="text-2xl font-semibold mb-4">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Cloud */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <h4 className="flex items-center gap-2 text-lg font-medium mb-3">
           ☁️ Cloud
            </h4>
      <ul className="space-y-2 text-sm opacity-90">
        <li className="flex items-center gap-2">
          <span>AWS Certified Solutions Architect – Associate</span>
          <a
            href="https://www.credly.com/badges/1aeeff1b-9a61-46b9-88ce-a667e817389d/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
           </li>
       <li> 
        <span>AWS Certified Developer – Associate </span>
          <a
            href="https://www.credly.com/badges/f7e72803-499e-40b6-b4e5-d4333b009a7e/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
        </li>
      

        <li> 
        <span>AWS Certified CloudOps Engineer – Associate </span>
          <a
            href="https://www.credly.com/badges/d61d52d9-6207-4cef-9f46-20f5bfee3b5c/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
        </li>

        <li> 
        <span>AWS Certified Cloud Practitioner </span>
          <a
            href="https://www.credly.com/badges/f9891656-68ad-4d65-bd70-b2ac3f2edb6a/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>

        </li>
        <li> 
        <span>AWS Certified AI Practitioner </span>
          <a
            href="https://www.credly.com/badges/e8b4fc1d-f81d-4916-9df2-0b4306997e64/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>

        </li>
         <h3 className="flex items-center gap-2 text-lg font-medium mb-3">
           ☁️ Azure
            </h3>
        
        <li> 
          <span> AZ 900 - Microsoft Certified: Azure Fundamentals </span>
          <a
            href="https://learn.microsoft.com/api/credentials/share/en-us/ShivangiPandey-2577/809FBC7C0012FBBE?sharingId=A35073F0EFD29E0A"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
          
</li>
       
        <li> 
          <span> AZ 104 - Microsoft Certified: Azure Administrator Associate </span>
          <a
            href="https://learn.microsoft.com/api/credentials/share/en-us/ShivangiPandey-2577/B114310BD984DEB7?sharingId=A35073F0EFD29E0A"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
          
</li>
       
        <li> 
          <span> 	MS 900 - Microsoft 365 Certified: Fundamentals </span>
          <a
            href="https://learn.microsoft.com/api/credentials/share/en-us/ShivangiPandey-2577/74419EFCF9D9EEE5?sharingId=A35073F0EFD29E0A"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
          
</li>

 <li> 
          <span> AZ 900: Microsoft Azure Fundamentals – Infosys</span>
          <a
            href="https://validate.onwingspan.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
          
</li>
    
        <li> 
          <span> Oracle Cloud Infrastructure 2025 Certified Foundations Associate </span>
          <a
            href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=FE4D111A28CC4FF3ADEE3CF97724B2D5E014F1D956E2F7C7B971DBE94C1AAD90"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
          
</li>
      </ul>
    </div>

    {/* DevOps */}
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
      <h4 className="flex items-center gap-2 text-lg font-medium mb-3">
        🔧 DevOps
      </h4>
      <ul className="space-y-2 text-sm opacity-90">
        <li> DevOps Beginners to Advance with Projects – Udemy </li>
        <li> DevOps Engineering Planning to Production – GeeksForGeeks </li>
        
      </ul>
    </div>

    {/* IT & Systems Administration */}
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
      <h4 className="flex items-center gap-2 text-lg font-medium mb-3">
        🖥 IT & Systems Administration
      </h4>
      <ul className="space-y-2 text-sm opacity-90">
        <li> ITIL Foundation Associate – Infosys </li>
        <li> <span>ITIL Awareness – Infosys </span>
        <a
            href=" https://validate.onwingspan.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
        </li>
        <li> 
          <span>Windows Server Administration (2016 & 2022) – Infosys </span>
        <a
            href="https://validate.onwingspan.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View1]
          </a>  
          <a
            href="https://validate.onwingspan.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View2]
          </a>  
         </li>
        <li> 
          <span>ServiceNow Administration – Infosys </span>
        <a
            href="https://validate.onwingspan.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>  
        </li>
        <li> 
          <span>Active Directory Administration – Infosys </span> 
        <a
            href="https://validate.onwingspan.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>  
        </li>
        <li>
          <span>Production Support – Best Practices – Infosys </span> 
        <a
            href="https://validate.onwingspan.com"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>  
           </li>
        <li>
          <span>Operating Systems Basics – Cisco </span> 
        <a
            href="https://www.credly.com/badges/9e4de454-6b35-4008-a63e-e24592e748e4/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a> 

        </li>
         <li>
          <span>Networking Basics – Cisco </span> 
        <a
            href="https://www.credly.com/badges/0cc1f833-70c1-4f49-a8a1-c0716bb697cb/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a> 

        </li>
      </ul>
    </div>

   

    {/* AI Learning  */}
    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
      <h4 className="flex items-center gap-2 text-lg font-medium mb-3">
        🤖 AI Learning & Additional Badges
      </h4>
      <ul className="space-y-2 text-sm opacity-90">
        <li>
          <span>Introduction to Generative AI - Google </span> 
          
        <a
            href="https://www.cloudskillsboost.google/public_profiles/3cb23b9d-4c23-4c6d-be83-373410677ae3"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
          </li>
        <li> 
          <span>Introduction to Modern AI – Cisco  </span>
        <a
            href="https://www.credly.com/badges/ebbfdd47-3617-4b57-b20b-4291b249985f/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
        </li>
         <li> 
          <span> Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate </span>
        <a
            href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=F1354CBF11D6888AB40372CF1F2B1C7BEB59AD0126B683C79FF4A40196181B21"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
        </li>
        <li> 
          <span> AWS Well Architected Proficient  </span>
        <a
            href="https://www.credly.com/badges/72c69df5-d571-45af-aac6-ce1a020f7a85/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
        </li>
        <li> 
          <span> AWS Knowledge: Architecting </span>
        <a
            href="https://www.credly.com/badges/61fb2763-6821-4295-995c-d52d855b765d/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
        </li>
        <li> 
          <span> AWS Knowledge: Serverless </span>
        <a
            href="https://www.credly.com/badges/4066a6e0-7e79-48ed-b260-e7f3f2f9670c/public_url"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:underline ml-1"
          >
            [View]
          </a>
        </li>
      </ul>
    
    </div>
  </div>
          </section>

          

          {/* RESUME (brief) */}
          <section id="resume" className="px-6 py-12 border-b border-slate-800">
            <h3 className="text-2xl font-semibold mb-4">Resume</h3>
            {/* NEW INTRODUCTORY LINE */}
  <p className="mb-4 text-lg text-slate-400">
    The attached document (PDF) serves as my Master CV of record.  I'm happy to provide a customized resume, emphasizing on specific role requirements upon request.
  </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-200/90">
              <li>99.95% uptime sustained across enterprise workloads.</li>
              <li>MTTR reduced 30–40% via runbooks & observability.</li>
              <li>25–40% Azure & AWS cost optimization (Rightsizing, S3 Lifecycle, Serverless).</li>
            </ul>
            <a
              href="https://drive.google.com/file/d/10XpbpETwsQfsou9IOYAMj0aTECBDXl3v/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-5 rounded-full px-6 py-3 border border-slate-700 hover:bg-slate-800"
             >
             Download CV (PDF)
             </a>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="px-6 py-12 border-b border-slate-800">
            <h3 className="text-2xl font-semibold mb-6">Portfolio</h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {[
                {
                  title: "Sparkset Planner– Full-Stack Event Management (2025)",
                  summary:
                    "Built a cloud-native event management app using AWS Elastic Beanstalk with CI/CD pipelines, SES notifications, and Stripe payments; integrated OpenWeather API for real-time data.",
                  stack:"Python | Django | Simple Email Service | SonarQube | PyLint | Cloud9 | AWS CI/CD pipeline | AWS Beanstalk | Auto Scaling (ALB) | Stripe & OpenWeather API |",  
                  github: "https://github.com/Shivangip01/Sparkset_planner",
                },
                {
                  title: "Cover Sphere – Insurance Management System (2024)",
                  summary:
                    "Role-based insurance system on AWS Beanstalk with CI/CD, S3, SNS for automation and notifications.",
                  stack:"Python | Django | SQLite | Cloud9 | Simple Notification Service | S3 | AWS CI/CD pipeline | AWS Beanstalk | Auto Scaling (ALB) |",  
                  github: "https://github.com/Techfay/CoverSphere",
                },
                {
                  title: "Cloud ML in Action – Customer Segmentation using KNN and SVM (2025)",
                  summary:
                    "Developed and deployed KNN & SVM models with Scikit-learn and Streamlit on AWS for real-time customer segmentation and visualization.",
                  stack:"Python | Pandas | NumPy | SciKit-Learn | Google Colab | ML Algorithms - KNN & SVM | StreamLit | AWS Beanstalk | Auto Scaling (ALB) |",  
                  github: "https://github.com/Techfay/Cloud-ML-In-Action",
                  youtube:"https://www.youtube.com/watch?v=av8fZe1EoCY",
                },
                {
                  title: "Deep Learning and Machine Learning for Enhanced Anomaly Detection in EVSE Systems",
                  summary:
                    "Designed a hybrid Deep Learning + Machine Learning framework to detect cyberattacks on EV charging stations using the CICEVSE2024 dataset (115K+ samples). Benchmarked DNN (99.86% accuracy, 0.9986 AUC) against Random Forest, Gradient Boosting, and SVM. Delivered a scalable, real-time anomaly detection pipeline that strengthens the cybersecurity of future smart transportation systems.",
                  stack: "Google Colab | Python | Pandas | NumPy | SciKit-Learn | TensorFlow | Deep Neural Network (DNN) | ML Models - RF, SVM & GB |", 
                  youtube:"https://youtu.be/1WD9zO4yOaM",
                },
                {
                  title: "Smart Highway Environmental Monitoring using Hybrid Fog-Cloud Architecture",
                  summary:
                    "Developed a hybrid fog-cloud smart highway monitoring system with IoT sensors (temperature, air quality, water quality, smoke, humidity) across urban, suburban, and rural zones. Implemented using iFogSim2 and Azure IoT Hub to deliver real-time alerts and cloud-based analytics for transport safety.",
                  stack: " Java | CloudSim | iFogSim2 | IoT Sensors | Python | Azure IoT Hub & Azure Explorer | ",
                  github:"",
                  youtube:"https://www.youtube.com/watch?v=V0CpXUOO2Hk",
                  
                },
                {
                  title: "Blockchain and Smart Contracts: Transition Towards New Era",
                  summary:
                    "Implemented Ethereum-based ERC20 tokens and ERC721 NFTs using Solidity, Remix, and MetaMask (Sepolia). Verified deployments on Etherscan, showcased NFT trading on OpenSea, and highlighted real-world use cases in supply chain, healthcare, DeFi, and IoT.",
                  stack: "ERC20 | ERC721 | Ethereum | Solidity | MetaMask (Sepolia Test Network) | Remix IDE | EtherScan | OpenSea | Distributed Ledger Technology (DLTs) | ",
                  github:"",
                  youtube:"https://www.youtube.com/watch?v=FAc9Pz-4L28",

                },
              ].map((p) => (
                <div key={p.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                  <div className="font-semibold mb-2">{p.title}</div>
                  <p className="text-sm opacity-90">{p.summary}</p>
                   <p className="text-sm opacity-90">Tech Stack: {p.stack}</p>
                   <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    className="text-xs text-blue-400"
                    >
                    View on GitHub |
                    </a>
                    <a
                    href={p.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    className="text-xs text-blue-400"
                    >
                     | View on Youtube 
                    </a>
                </div>
              ))}
            </div>
          </section>

         {/* Career Experience (placeholder) */}
          <section id="career" className="px-6 py-12 border-b border-slate-800">
            <h3 className="text-2xl font-semibold mb-4">Career Experience</h3>
            
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <div className="text-lg font-medium mb-1">Senior Systems Engineer (Senior Platform Engineer)</div>
            <div className="text-sm text-cyan-300 mb-2"> (Jan. 2023 – Aug. 2024)</div>
            <div className="text-sm text-cyan-300 mb-2"> Infosys, India | Client. Intel </div>
            
            <p className="text-sm opacity-90">
               · Delivered end-to-end infrastructure support for Intel’s hybrid cloud environments (AWS, Azure, on-prem).</p>
            <p className="text-sm opacity-90">
               · Automated server provisioning with Terraform/Ansible, managed VMware vSphere/Hyper-V, and optimized AWS workloads for cost and performance.</p>
               <p className="text-sm opacity-90">
               · Improved reliability by implementing monitoring/alerting (CloudWatch, Datadog, Grafana, Prometheus) and strengthened security with IAM, MFA, and RBAC.
               </p>
               
            <p className="text-sm opacity-90">
             ·	Mentored and onboarded 7+ engineers on hybrid cloud infrastructure provisioning, CI/CD processes, and monitoring practices to streamline onboarding and accelerate team productivity.
            </p>
             </div>
             
           <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
           <div className="text-lg font-medium mb-1"> Systems Engineer (Platform Engineer) </div>
           <div className="text-sm text-cyan-300 mb-2"> (Dec. 2021 – Dec. 2023)</div>
           <div className="text-sm text-cyan-300 mb-2"> Infosys, India | Client. Intel </div>
           <p className="text-sm opacity-90">
            ·Managed 200+ cloud & on-prem resources across AWS & Azure, achieving 99.9% deployment success rate while ensuring timely provisioning and system stability.
           </p>
           <p className="text-sm opacity-90">
            · Maintained 250+ Linux & Windows servers in hybrid cloud environments with 99.95% uptime, proactive patching, and performance tuning.
           </p>
           <p className="text-sm opacity-90">
           · Resolved high-critical issues with minimal downtime and applied security patches manually via BigFix & AWS SSM, reducing operational risks.
           </p>
           <p className="text-sm opacity-90">
           · Administered full server lifecycle (VMware vSphere, Hyper-V) including provisioning, configuration, patching, quota expansion, and decommissioning—reducing manual errors by 80%.
           </p>
           <p className="text-sm opacity-90">
           · Created and managed AWS & Azure subscription accounts, including account closure based on business/user requests.
           </p>
           <p className="text-sm opacity-90">
           · Configured DNS records within AWS VPCs and established VPN connections in Azure, supporting secure hybrid networking.
            </p>
           <p className="text-sm opacity-90">
           · Delivered L2/L3 technical support and ITIL workflows via ServiceNow, ensuring 97%+ SLA compliance and strengthening audit readiness.
           </p>
           <p className="text-sm opacity-90">
           · Authored 100+ SOPs & KBs, improving resolution consistency by 30%, while collaborating across Compute, Storage, Backup, and DevOps teams for high availability.
           </p>
           <p className="text-sm opacity-90">
           · Partnered with Solution Architects to support cloud migration, infrastructure design, and security alignment for enterprise workloads.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <div className="text-lg font-medium mb-1"> Information Technology System Administrator </div>
            <div className="text-sm text-cyan-300 mb-2"> (Aug. 2019 – Sept. 2021)</div>
            <div className="text-sm text-cyan-300 mb-2"> GREENPEOPLESERVICES PRIVATE LIMITED, India  </div>
            
            <p className="text-sm opacity-90">
               · Managed day-to-day IT systems and infrastructure, supporting Windows and Linux machines, user devices, and internal services to keep operations running smoothly.</p>
            <p className="text-sm opacity-90">
               · Handled user access and device management, including account setup and removal, email, laptops, and basic security settings.</p>
               <p className="text-sm opacity-90">
               · Maintained system updates, backups, and security checks, helping reduce downtime and data-loss risk.
               </p>
               
            <p className="text-sm opacity-90">
             ·	Created and maintained IT documentation, asset records, and standard procedures, while keeping software licenses and vendors organized to control costs.
            </p>
             </div>
            
            
          </section>



          
          {/* Education (placeholder) */}
          <section id="education" className="px-6 py-12 border-b border-slate-800">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            {/* MSc */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-lg font-medium mb-1">MSc in Cloud Computing</div>
            <div className="text-sm text-cyan-300 mb-2">National College of Ireland (2024–2025) | 2:1 |</div>
            
            <p className="text-sm opacity-90">
               Focused on cloud-native and enterprise-grade platforms, combining scalable architectures, DevOps automation, and AI/ML to 
               deliver intelligent solutions. Strengthened expertise through edge computing, blockchain, and compliance-driven cloud technologies.
               <p className="text-sm opacity-90">
               Dissertation: <em>Deep Learning and Machine Learning for Enhanced Anomaly Detection in EVSE Systems.</em>.
               </p>
               </p>
            <p className="text-sm opacity-90">
               Advanced Learning Streams: Cloud Architectures, Cloud DevOpsSec, Cloud Platform Programming, Scalable Cloud Programming, 
               Cloud Machine Learning, Fog & Edge Computing, Blockchain Concepts, Data Governance & Compliance, Research in Computing.
            </p>
             </div>
            
            {/* Optional Publication Link */}
            <p className="text-sm opacity-90">
            Publication:{" "}
            <a
            href="https://link.springer.com/chapter/10.1007/978-981-19-0312-0_45"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-200 underline"
            >
            View Paper
            </a>
            </p>

           {/* B.Tech */}
           <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
           <div className="text-lg font-medium mb-1">BTech in Electronics & Communication (ECE) </div>
           <div className="text-sm text-cyan-300 mb-2">AKTU, India (2015–2019) | 75 % |</div>
           
           <p className="text-sm opacity-90">
              Specialization in Electronics & Communication, complemented by applied computing to develop real-world systems.
            </p>
            <p className="text-sm opacity-90">
               Capstone Project:<em> Smart Mirror Using Raspberry Pi.</em> 
               </p>
          
          </div>
            
          </section>

          {/* CONTACT */}
          <section id="contact" className="px-6 py-12 border-t border-slate-800">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <div className="flex flex-col gap-4 text-slate-200/90">

          {/* Address */}
           <a>
           <MapPin className="w-6 h-6" />
            Dublin, Ireland
           </a>

    {/* Email */}
    <a
      href="mailto:shivangi@example.com"
      className="flex items-center gap-3 hover:text-sky-400"
    >
      <Mail className="w-6 h-6" />
      shivangipandey0142@gmail.com
    </a>

    {/* Phone */}
    <a
      href="tel:+353899699984"
      className="flex items-center gap-3 hover:text-sky-400"
    >
      <Phone className="w-6 h-6" />
      +353 899 699 984, +91 9026226463
    </a>
  </div>
</section>


          <div className="flex flex-wrap items-center gap-3">
          {profile.links.map((l) => (
          <a
           key={l.label}
           href={l.href}
           target="_blank"
           rel="noreferrer"
           className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-3 py-2 hover:bg-slate-800"
           >
           <l.icon className="w-5 h-5" />
           {l.label}
           </a>
           ))}
           </div>
        </main>
      </div>
    </div>
  );
}
