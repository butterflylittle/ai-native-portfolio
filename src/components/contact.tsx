'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Mail, Phone, Github } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: '13710610218@163.com',
      href: 'mailto:13710610218@163.com',
      color: 'text-blue-600',
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '137 1061 0218',
      href: 'tel:+8613710610218',
      color: 'text-green-600',
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: 'GitHub',
      value: 'butterflylittle',
      href: 'https://github.com/butterflylittle',
      color: 'text-gray-800',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          欢迎交流高级前端开发、工程化、AI 应用与合作机会。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {contactInfo.map((contact, index) => (
          <Card key={index} className="transition-shadow hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`rounded-lg bg-gray-100 p-2 ${contact.color}`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-3 text-base font-medium">
                {contact.value}
              </CardDescription>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open(contact.href, '_blank')}
              >
                {contact.title === 'Location'
                  ? 'View on Map'
                  : `Open ${contact.title}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-4 pt-6 text-center">
        <div className="bg-accent rounded-lg p-6">
          <h3 className="mb-2 font-semibold">What I'm Looking For</h3>
          <p className="text-muted-foreground text-sm">
            • 高级前端开发 • Vue3 / TypeScript • React / Next.js • 前端工程化 •
            AI 应用
          </p>
        </div>

        <p className="text-muted-foreground text-sm">
          如有岗位、项目合作或技术交流，欢迎通过邮箱、电话或 GitHub 联系我。
        </p>
      </div>
    </div>
  );
}
