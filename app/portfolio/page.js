import styles from './page.module.css'

async function getData() {
    const response = await fetch('https://5qdns7-8080.csb.app/project', {
        next: {
            revalidate: 60
        }
    })
    return response.json()
}

export const metadata = {
    title: 'Портфолио / maxpryadkin.ru',
  }

export default async function Portfolio() {
    const project = await getData()
    return (
        <div>
        <h1>Портфолио</h1>
        <ul className={styles.project__ul}>
            { project.map(item => <li key={item.id} className={styles.project__li}>
                <div className={styles.block__img}>
                    <img src={ item.image } />
                    </div>
                    <div className={styles.block__info}>
                        <h3>{ item.title }</h3>
                        <span className={styles.category__span}>{ item.category }</span>
                        <div className={styles.items__info}>
                        { item.github === "" ? "" : <a className={styles.github__link} href={item.github}>github</a> }
                        { item.site === "" ? "" : <a className={styles.site__link} href={item.site}>сайт</a> }
                        </div>
                    </div>
                </li>
                )}
        </ul>
        </div>
    )
}