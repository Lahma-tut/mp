import styles from './page.module.css'

export const metadata = {
  title: 'Обо мне / maxpryadkin.ru',
}

export default function Home() {
  return (
    <div>
        <h1>Обо мне</h1>
        <section>
          <div className={styles.about}>
            <div className={styles.about_block}>
              <div className={styles.about_block_column}>
                <h2>Максим Прядкин</h2>
                  <p>
                    Привет, меня зовут Максим, веб—разработкой заинтересовался в 2011 году. 
                    Изучил варианты и для старта выбрал WordPress, а в процессе освоил HTML, CSS.
                  </p>
                  <p>
                    Далее узнал про SEO и начал продвигать сайты. Устроился на работу в веб—студию. 
                    В процессе работы создавал, запускал и поддерживал проекты различной сложности.
                  </p>
                  <p>
                    Изучил основы JavaScript, углубился в React и Next.js.
                  </p>
              </div>
              <div className={styles.about_block_column}>
                <div className={styles.about_block_column_img}>
                  <div className={styles.about_block_column_img_about}></div>
                </div>
              </div>
            </div>
              <div className={styles.about_block_info}>
                  <ul>
                    <li>
                    <span>Адрес: </span>
                    <span>Санкт—Петербург</span>
                    </li>
                    <li>
                      <span>Образование: </span>
                      <span>Высшие, ВГАУ</span>
                      </li>
                      <li>
                        <span>Увлечения: </span>
                        <span>Музыкант</span>
                      </li>
                </ul>
                </div>
          </div>
        </section>
        <section>
          <h3>Навыки</h3>
          <div className={styles.skills_block}>
            <div className={styles.skills_column}>
              <h4>Junior Frontend—разработчик</h4>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML5, CSS3</li>
              </ul>
            </div>
            <div className={styles.skills_column}>
              <h4>SEO—специалист</h4>
              <ul>
                <li>Внутренняя оптимизация</li>
                <li>Семантическое ядро</li>
                <li>Внешняя оптимизация</li>
                <li>Аналитика</li>
                <li>Email—маркетинг</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
        <h3>Контакты</h3>
        <div className={styles.about_block_info}>
        <ul>
          <li>
            <span>Телефон:</span>
            <span>+7 (920) 469-12-86</span>
          </li>
          <li>
            <span>Cоцсети:</span>
            <span>maxpryadkin</span>
            </li>
          <li>
            <span>Почта:</span>
            <span>lahma@yandex.ru</span>
            </li>
        </ul>
        </div>
        </section>
      </div>
  )}
