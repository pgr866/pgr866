import type { ComponentType } from 'react';
import type { IconType } from 'react-icons';
import { LuZap } from 'react-icons/lu';
import { assetIcon } from '@/components/AssetIcon';
import { SiteLogo } from '@/components/SiteLogo';
import { siteUrl } from '@/lib/layout.shared';
import {
  SiAngular,
  SiArgo,
  SiCilium,
  SiCypress,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithubactions,
  SiGithubpages,
  SiGooglecloud,
  SiGrafana,
  SiIonic,
  SiIstio,
  SiK6,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTrivy,
  SiTypescript,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const GoogleCloudLogo = assetIcon('gcp.svg');
const SoccerLogo = assetIcon('msc-soccer-project.png');
const StratifyLogo = assetIcon('stratify.svg');

export type ProjectStatus = 'live' | 'in-progress' | 'completed';

export const projectsText = {
  intro:
    'A selection of projects where I put cloud automation, infrastructure as code and scalable architectures into practice.',
  status: {
    live: 'Live',
    'in-progress': 'In progress',
    completed: 'Completed',
  } satisfies Record<ProjectStatus, string>,
};

export type Project = {
  title: string;
  kicker?: string;
  description: string;
  highlights: string[];
  status: ProjectStatus;
  icon: ComponentType<{ className?: string }>;
  stack: { name: string; icon: IconType }[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  wide?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Security & Resilience in Microservices Orchestration',
    kicker: "Master's thesis",
    description:
      "A Kubernetes experiment on Google's Online Boutique (10 microservices in 5 languages): a 2×2 factorial design that turns security and resilience on and off to measure what each one costs and what it buys in latency, isolation and recovery time.",
    highlights: [
      'Designed as four Kustomize overlays, all behind an Istio service mesh: security adds network policies, strict mTLS, resource limits and admission policies; resilience adds replicas, disruption budgets and a circuit breaker',
      'Every service with unit tests and linters, graceful shutdown, deadlines propagated down the call chain and JSON logs that keep card data and emails out',
      'Minimal digest-pinned, non-root images with zero Trivy findings, Docker Compose with hot reload and a Dev Container per service',
      'A k6 end-to-end suite covering the full shopping flow, concurrent carts, a hung payment service and Redis outages',
      'In progress: fault injection with Chaos Mesh under k6 load, MTTR and latency in Prometheus and Grafana, and delivery to AKS with Terraform, GitHub Actions and Argo CD',
    ],
    status: 'in-progress',
    icon: GoogleCloudLogo,
    stack: [
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Istio', icon: SiIstio },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'Azure', icon: VscAzure },
      { name: 'Docker', icon: SiDocker },
      { name: 'Cilium', icon: SiCilium },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Argo CD', icon: SiArgo },
      { name: 'Chaos Mesh', icon: LuZap },
      { name: 'Prometheus', icon: SiPrometheus },
      { name: 'Grafana', icon: SiGrafana },
      { name: 'k6', icon: SiK6 },
      { name: 'Trivy', icon: SiTrivy },
    ],
    repo: 'https://github.com/pgr866/microservices-demo',
    featured: true,
  },
  {
    title: 'msc-soccer-project',
    kicker: "Master's first-year project",
    description:
      'An app to manage football players and their stats, built twice on purpose: one front end that can switch at runtime between two completely different backends.',
    highlights: [
      'Ionic and Angular app with Capacitor camera, geolocation and maps, switching backends at runtime',
      'The same API on Node and Express with MongoDB and on Spring Boot microservices with Eureka, Config Server, a Gateway and PostgreSQL',
      'Firebase sign-in with user and admin roles, an AI-generated ideal team with Groq and player news over CORBA',
      'Tests with Jest, JUnit, Testcontainers and Cypress, Docker Compose locally, and 4 CI and 4 CD GitHub Actions pipelines to Google Cloud Run',
    ],
    status: 'completed',
    icon: SoccerLogo,
    stack: [
      { name: 'Angular', icon: SiAngular },
      { name: 'Ionic', icon: SiIonic },
      { name: 'Cypress', icon: SiCypress },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Google Cloud', icon: SiGooglecloud },
    ],
    repo: 'https://github.com/pgr866/msc-soccer-project',
  },
  {
    title: 'Stratify',
    kicker: "Bachelor's thesis",
    description:
      'A full stack platform to design, simulate and run algorithmic trading strategies on crypto markets, built to make automated investing accessible to non-technical users.',
    highlights: [
      'Strategy builder with technical indicators over candlestick charts',
      'Simulated and live trading on real exchanges through CCXT',
      'JWT in HTTP-only cookies, Google and GitHub sign-in, email verification',
      'Docker Compose on an Azure VM hardened with Bash scripts (SSH, UFW, automatic updates)',
      "Nginx with Let's Encrypt, and TLS from an internal CA to PostgreSQL and Redis",
    ],
    status: 'completed',
    icon: StratifyLogo,
    stack: [
      { name: 'React', icon: SiReact },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Redis', icon: SiRedis },
      { name: 'Docker', icon: SiDocker },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Azure', icon: VscAzure },
    ],
    repo: 'https://github.com/pgr866/Stratify',
  },
  {
    title: 'Portfolio & Notes',
    kicker: 'Personal site',
    description:
      'This site: my profile and cheatsheets, built with Next.js and published automatically to GitHub Pages with CI/CD.',
    highlights: [
      'Static export served from GitHub Pages, deployed only when CI passes on main',
      'CI runs lint, type check, format check and build before every deploy',
      'SHA-pinned Actions, least-privilege permissions per job, Dependabot and a Dev Container with Docker Compose',
      'Notes written in MDX with built-in search',
    ],
    status: 'live',
    icon: SiteLogo,
    stack: [
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'GitHub Pages', icon: SiGithubpages },
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
    ],
    repo: 'https://github.com/pgr866/pgr866',
    demo: siteUrl,
    wide: true,
  },
];
