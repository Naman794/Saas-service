import { BarChart3, Bot, CheckCircle2, Globe2, Layers3, Server, ShieldCheck, Users2, Workflow, Zap } from "lucide-react";

export const iconMap = {
  users: Users2,
  globe: Globe2,
  server: Server,
  workflow: Workflow,
  chart: BarChart3,
  shield: ShieldCheck,
  bot: Bot,
  layers: Layers3,
  zap: Zap,
  check: CheckCircle2
};

export type IconKey = keyof typeof iconMap;
