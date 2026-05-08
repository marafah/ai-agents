import {
  CircleDot,
  Tags,
  Link,
  Shapes,
  Lock,
  Layers,
  Lightbulb,
  BookOpen,
  Crown,
  Database,
  GitBranch,
  Search,
  Network,
  Brain,
} from 'lucide-react';
import type { DiagramDataMap } from '../templates/types';

export const knowledgeRepresentationDiagrams: DiagramDataMap = {
  'knowledge-graphs': [
    {
      template: 'hub-spoke',
      position: 'after-definition',
      title: {
        en: 'Knowledge Graph Components',
        ar: 'مكونات رسم المعرفة',
      },
      data: {
        center: {
          label: { en: 'Entity', ar: 'الكيان' },
          color: '#8b5cf6',
          icon: CircleDot,
        },
        spokes: [
          {
            label: { en: 'Properties', ar: 'الخصائص' },
            description: { en: 'Attributes of the entity', ar: 'سمات الكيان' },
            color: '#3b82f6',
            icon: Tags,
          },
          {
            label: { en: 'Relationships', ar: 'العلاقات' },
            description: { en: 'Connections to other entities', ar: 'الروابط مع كيانات أخرى' },
            color: '#f59e0b',
            icon: Link,
          },
          {
            label: { en: 'Types', ar: 'الأنواع' },
            description: { en: 'Classification categories', ar: 'فئات التصنيف' },
            color: '#10b981',
            icon: Shapes,
          },
          {
            label: { en: 'Constraints', ar: 'القيود' },
            description: { en: 'Rules and validations', ar: 'القواعد والتحققات' },
            color: '#f43f5e',
            icon: Lock,
          },
        ],
      },
    },
  ],

  'ontologies-for-agents': [
    {
      template: 'stack',
      position: 'in-explanation',
      title: {
        en: 'Ontology Layer Architecture',
        ar: 'معمارية طبقات الأنطولوجيا',
      },
      data: {
        layers: [
          {
            label: { en: 'Instance Layer', ar: 'طبقة النسخ' },
            description: { en: 'Concrete individuals', ar: 'الأفراد الملموسون' },
            color: '#3b82f6',
            icon: CircleDot,
          },
          {
            label: { en: 'Concept Layer', ar: 'طبقة المفاهيم' },
            description: { en: 'Classes and categories', ar: 'الفئات والتصنيفات' },
            color: '#8b5cf6',
            icon: Lightbulb,
          },
          {
            label: { en: 'Relation Layer', ar: 'طبقة العلاقات' },
            description: { en: 'Properties and associations', ar: 'الخصائص والارتباطات' },
            color: '#f59e0b',
            icon: Link,
          },
          {
            label: { en: 'Axiom Layer', ar: 'طبقة البديهيات' },
            description: { en: 'Logical rules and constraints', ar: 'القواعد المنطقية والقيود' },
            color: '#10b981',
            icon: BookOpen,
          },
          {
            label: { en: 'Meta-Ontology', ar: 'الأنطولوجيا الفوقية' },
            description: { en: 'Foundational vocabulary', ar: 'المفردات الأساسية' },
            color: '#f43f5e',
            icon: Crown,
          },
        ],
      },
    },
  ],

  'neo4j-for-agents': [
    {
      template: 'flow',
      position: 'after-definition',
      title: {
        en: 'Neo4j Agent Integration Flow',
        ar: 'تدفق تكامل Neo4j مع الوكلاء',
      },
      data: {
        steps: [
          {
            label: { en: 'Data Ingest', ar: 'استيعاب البيانات' },
            sublabel: { en: 'Load raw data', ar: 'تحميل البيانات الخام' },
            color: '#3b82f6',
            icon: Database,
          },
          {
            label: { en: 'Create Nodes', ar: 'إنشاء العقد' },
            sublabel: { en: 'Define entities', ar: 'تعريف الكيانات' },
            color: '#8b5cf6',
            icon: CircleDot,
          },
          {
            label: { en: 'Add Relationships', ar: 'إضافة العلاقات' },
            sublabel: { en: 'Connect nodes', ar: 'ربط العقد' },
            color: '#f59e0b',
            icon: GitBranch,
          },
          {
            label: { en: 'Cypher Query', ar: 'استعلام Cypher' },
            sublabel: { en: 'Graph query language', ar: 'لغة استعلام الرسم' },
            color: '#06b6d4',
            icon: Search,
          },
          {
            label: { en: 'Graph Patterns', ar: 'أنماط الرسم' },
            sublabel: { en: 'Match structures', ar: 'مطابقة الهياكل' },
            color: '#10b981',
            icon: Network,
          },
          {
            label: { en: 'Agent Context', ar: 'سياق الوكيل' },
            sublabel: { en: 'Feed to agent', ar: 'تغذية الوكيل' },
            color: '#f43f5e',
            icon: Brain,
          },
        ],
      },
    },
  ],
};
