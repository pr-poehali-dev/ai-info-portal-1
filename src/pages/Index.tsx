import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
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
            <button onClick={() => scrollToSection('possibilities')} className="text-sm font-medium hover:text-primary transition-colors">Возможности</button>
            <button onClick={() => scrollToSection('potential')} className="text-sm font-medium hover:text-primary transition-colors">Потенциал</button>
            <button onClick={() => scrollToSection('future')} className="text-sm font-medium hover:text-primary transition-colors">Будущее</button>
            <Button size="sm" className="font-medium" onClick={() => scrollToSection('possibilities')}>
              Узнать больше
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('possibilities')} className="text-left text-sm font-medium hover:text-primary transition-colors py-2">Возможности</button>
              <button onClick={() => scrollToSection('potential')} className="text-left text-sm font-medium hover:text-primary transition-colors py-2">Потенциал</button>
              <button onClick={() => scrollToSection('future')} className="text-left text-sm font-medium hover:text-primary transition-colors py-2">Будущее</button>
              <Button size="sm" className="font-medium" onClick={() => scrollToSection('possibilities')}>
                Узнать больше
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="font-heading font-bold text-6xl md:text-8xl mb-6 tracking-tight">
              ARTIFICIAL
              <br />
              <span className="text-primary">INTELLIGENCE</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Технология, которая меняет мир и открывает безграничные возможности для человечества
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              От распознавания образов до создания произведений искусства, от медицинской диагностики до управления городами — искусственный интеллект становится неотъемлемой частью нашей повседневной жизни. Мы стоим на пороге новой эры, где границы между возможным и невозможным стираются каждый день.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 font-medium" onClick={() => scrollToSection('possibilities')}>
                <Icon name="Sparkles" size={20} className="mr-2" />
                Исследовать ИИ
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-medium" onClick={() => scrollToSection('potential')}>
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
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                Искусственный интеллект уже сегодня решает сложнейшие задачи во всех сферах
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Современные системы искусственного интеллекта способны обрабатывать петабайты информации за считанные секунды, выявлять скрытые взаимосвязи в данных и принимать решения на основе миллионов параметров. Технологии глубокого обучения позволяют машинам не просто выполнять запрограммированные действия, а самостоятельно учиться на опыте и улучшать свои результаты.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "Brain",
                  title: "Машинное обучение",
                  description: "ИИ анализирует огромные массивы данных и находит закономерности, недоступные человеку. Нейронные сети с миллиардами параметров обучаются на терабайтах информации, выявляя тончайшие паттерны и зависимости. Это позволяет делать точные предсказания и принимать оптимальные решения в реальном времени."
                },
                {
                  icon: "MessageSquare",
                  title: "Обработка языка",
                  description: "Понимание и генерация естественного языка на уровне, близком к человеческому. Современные языковые модели способны вести диалог, писать тексты, переводить между языками, анализировать тональность и даже понимать контекст и подтекст сообщений. Это открывает новые возможности для коммуникации и обработки информации."
                },
                {
                  icon: "Eye",
                  title: "Компьютерное зрение",
                  description: "Распознавание объектов, лиц и анализ визуальной информации в реальном времени. Системы компьютерного зрения превосходят человека в точности идентификации образов, могут обрабатывать тысячи изображений одновременно и работают в условиях, недоступных человеческому глазу — от инфракрасного до рентгеновского спектра."
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
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                ИИ только начинает раскрывать свои возможности. Впереди революционные изменения
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Мы находимся лишь в начале пути развития искусственного интеллекта. То, что казалось фантастикой десять лет назад, сегодня стало реальностью. А то, что мы создадим в ближайшее десятилетие, изменит мир до неузнаваемости. ИИ не просто улучшает существующие процессы — он создает совершенно новые возможности и открывает горизонты, о которых мы раньше не могли даже мечтать.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Медицина и здравоохранение",
                  description: "ИИ революционизирует медицину на всех уровнях. Системы машинного обучения анализируют медицинские снимки быстрее и точнее врачей, выявляя ранние признаки заболеваний. Алгоритмы предсказывают развитие болезней по генетическим данным и истории пациента. ИИ помогает разрабатывать новые лекарства за месяцы вместо лет, персонализирует лечение под каждого пациента и даже управляет хирургическими роботами с микронной точностью.",
                  stats: "91% точность диагностики",
                  icon: "Heart"
                },
                {
                  title: "Образование и наука",
                  description: "ИИ создает персонализированные образовательные программы, адаптирующиеся под темп и стиль обучения каждого студента. Интеллектуальные системы анализируют прогресс, выявляют слабые места и предлагают оптимальные методы освоения материала. В науке ИИ ускоряет исследования, обрабатывая огромные массивы данных, выдвигая гипотезы и даже делая открытия самостоятельно. Демократизация доступа к знаниям становится реальностью.",
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
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Искусственный интеллект не заменит человека, а станет мощным инструментом, 
                который поможет решить глобальные проблемы и создать лучшее будущее для всех
              </p>
              <p className="text-base text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
                История человечества — это история создания инструментов. От каменного топора до компьютера, каждое изобретение расширяло наши возможности и открывало новые горизонты. Искусственный интеллект — это следующий шаг эволюции, инструмент невероятной мощности, который усиливает наш разум так же, как машины усилили наши мышцы. Вместе, человек и ИИ, мы можем достичь того, что казалось недостижимым: победить болезни, остановить изменение климата, исследовать космос и обеспечить процветание для каждого жителя планеты.
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

      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-2 shadow-2xl animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Icon name="Lightbulb" size={32} className="text-primary" />
                </div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                  Заключение
                </h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Искусственный интеллект — это не просто технология будущего. Это настоящее, которое уже меняет нашу жизнь каждый день. От персональных помощников в смартфонах до систем, управляющих глобальными процессами, ИИ становится неотъемлемой частью современного мира.
                </p>
                
                <p>
                  Мы стоим на пороге грандиозных перемен. То, что еще вчера казалось научной фантастикой, сегодня становится реальностью. Машины учатся понимать человеческую речь, распознавать эмоции, создавать искусство и принимать сложные решения. Но самое важное — они помогают нам становиться лучше.
                </p>
                
                <p>
                  Будущее искусственного интеллекта зависит от нас. От того, как мы будем его развивать, какие задачи ставить и какие ценности закладывать. ИИ может помочь решить самые острые проблемы человечества: от борьбы с болезнями до сохранения планеты для будущих поколений.
                </p>
                
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg my-8">
                  <p className="text-foreground font-medium text-xl italic">
                    "Искусственный интеллект — это зеркало человеческого гения. Он отражает не только наши знания, но и наши надежды на лучшее будущее."
                  </p>
                </div>
                
                <p>
                  Важно помнить, что ИИ — это инструмент. Мощный, революционный, но всё же инструмент. Он не заменяет человека, а дополняет его. Творчество, эмпатия, этика, способность к абстрактному мышлению — всё это остается исключительно человеческими качествами. ИИ усиливает наши способности, освобождает время для того, что действительно важно.
                </p>
                
                <p>
                  Эра искусственного интеллекта открывает перед человечеством беспрецедентные возможности. Возможности для роста, развития, познания. Возможности создать мир, где технологии служат людям, где знания доступны каждому, где границы возможного расширяются с каждым днем.
                </p>
                
                <p className="text-foreground font-semibold text-xl pt-4">
                  Будущее начинается сегодня. И оно полно удивительных перспектив.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border flex justify-center">
                <Button size="lg" className="text-lg px-8 py-6 font-medium" onClick={() => scrollToSection('possibilities')}>
                  <Icon name="ArrowUp" size={20} className="mr-2" />
                  Вернуться к началу
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-lg">AI TECHNOLOGY</span>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-muted-foreground">
              © 2025 AI Technology. Исследуем будущее вместе.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;