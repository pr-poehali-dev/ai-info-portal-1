import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl">AI TECHNOLOGY</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#possibilities" className="text-sm font-medium hover:text-primary transition-colors">Возможности</a>
            <a href="#potential" className="text-sm font-medium hover:text-primary transition-colors">Потенциал</a>
            <a href="#future" className="text-sm font-medium hover:text-primary transition-colors">Будущее</a>
            <Button size="sm" className="font-medium">
              Узнать больше
            </Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-6xl md:text-8xl mb-6 tracking-tight">
              ARTIFICIAL
              <br />
              <span className="text-primary">INTELLIGENCE</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Технология, которая меняет мир и открывает безграничные возможности для человечества
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 font-medium">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Исследовать ИИ
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-medium">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Документация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/9fd372bd-e699-4e57-8be7-9e0e84fc36e1/files/9f821dde-6f94-4cbc-b73c-c9408327ec15.jpg" 
              alt="AI Neural Network"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl animate-scale-in"
            />
          </div>
        </div>
      </section>

      <section id="possibilities" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                Возможности <span className="text-primary">ИИ</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Искусственный интеллект уже сегодня решает сложнейшие задачи во всех сферах
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "Brain",
                  title: "Машинное обучение",
                  description: "ИИ анализирует огромные массивы данных и находит закономерности, недоступные человеку"
                },
                {
                  icon: "MessageSquare",
                  title: "Обработка языка",
                  description: "Понимание и генерация естественного языка на уровне, близком к человеческому"
                },
                {
                  icon: "Eye",
                  title: "Компьютерное зрение",
                  description: "Распознавание объектов, лиц и анализ визуальной информации в реальном времени"
                },
                {
                  icon: "Zap",
                  title: "Автоматизация",
                  description: "Выполнение рутинных задач с высокой скоростью и точностью 24/7"
                },
                {
                  icon: "Target",
                  title: "Прогнозирование",
                  description: "Предсказание трендов и событий на основе исторических данных и паттернов"
                },
                {
                  icon: "Cpu",
                  title: "Оптимизация",
                  description: "Поиск оптимальных решений в сложных многофакторных системах"
                }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon name={item.icon} size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="potential" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-6">
                Потенциал <span className="text-primary">будущего</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ИИ только начинает раскрывать свои возможности. Впереди революционные изменения
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Медицина и здравоохранение",
                  description: "ИИ уже диагностирует заболевания точнее врачей, разрабатывает новые лекарства и персонализирует лечение",
                  stats: "91% точность диагностики",
                  icon: "Heart"
                },
                {
                  title: "Образование и наука",
                  description: "Персонализированное обучение, ускорение научных открытий и доступ к знаниям для каждого человека",
                  stats: "40% быстрее изучение",
                  icon: "GraduationCap"
                },
                {
                  title: "Экология и климат",
                  description: "Мониторинг состояния планеты, оптимизация энергопотребления и борьба с изменением климата",
                  stats: "30% сокращение выбросов",
                  icon: "Leaf"
                },
                {
                  title: "Космос и исследования",
                  description: "Анализ космических данных, управление миссиями и поиск жизни за пределами Земли",
                  stats: "1000x больше данных",
                  icon: "Rocket"
                }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="p-8 hover:shadow-xl transition-all duration-300 border-2 group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon name={item.icon} size={32} className="text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-2xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-lg mb-4 leading-relaxed">{item.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                        <Icon name="TrendingUp" size={16} className="text-primary" />
                        <span className="font-semibold text-primary">{item.stats}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="future" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Icon name="Sparkles" size={16} className="text-primary" />
                <span className="font-semibold text-primary text-sm">БУДУЩЕЕ УЖЕ ЗДЕСЬ</span>
              </div>
              <h2 className="font-heading font-bold text-5xl md:text-6xl mb-8">
                Эра <span className="text-primary">интеллекта</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Искусственный интеллект не заменит человека, а станет мощным инструментом, 
                который поможет решить глобальные проблемы и создать лучшее будущее для всех
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="text-center animate-scale-in">
                  <div className="text-5xl font-heading font-bold text-primary mb-2">2.6B+</div>
                  <div className="text-muted-foreground">Пользователей ИИ</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
                  <div className="text-5xl font-heading font-bold text-primary mb-2">15.7T$</div>
                  <div className="text-muted-foreground">Вклад в экономику</div>
                </div>
                <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-5xl font-heading font-bold text-primary mb-2">97%</div>
                  <div className="text-muted-foreground">Компаний внедряют ИИ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-lg">AI TECHNOLOGY</span>
              </div>
              <div className="flex gap-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              © 2024 AI Technology. Исследуем будущее вместе.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
