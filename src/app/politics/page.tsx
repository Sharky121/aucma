import styles from "../styles/sections/politics/politics.module.scss";
import Container from "@/components/container/container";
import Heading from "@/components/heading/heading";

export default async function Page() {
    return (
        <section className={styles.politics}>
            <Heading isDanger>Регламент политики конфиденциальности</Heading>
            <Container customClassName={styles.politicsContainer}>
                <ol className={styles.politicsList}>
                    <li className={styles.politicsItem}>
                        <h4>Сфера и предмет регулирования.</h4>
                        <p>Настоящий Регламент защиты информации о пользователях (далее – Регламент) является официальным документом ООО «Наставники» (далее – Общество) и разработан и исполняется Обществом в отношении проектов и сервисов Общества (далее – Интернет-ресурсы).
                            Данный Регламент определяет условия и цели сбора, хранения, защиты, обработки, предоставления и распространения информации о пользователях Интернет-ресурсов Общества.
                        </p>

                        <p>Адрес и контакты ООО «АКМА РУС»: https://aucma-rus.ru <br />
                            Адрес местонахождения (юридический адрес): 142181, Московская обл, г.о. Подольск, д Коледино, тер Индустриальный Парк Коледино, 30А.<br />
                            Адрес фактический: 117246, г. Москва, Научный проезд, 8с1, офис 413.<br />
                            ИНН: 5074087157<br />
                            ОГРН: 1245000030318<br />
                            Телефон: +7 499 677 65 43<br />
                        </p>
                    </li>

                    <li className={styles.politicsItem}>
                        <h4>Виды информации.</h4>
                        <p>В соответствии с настоящим Регламентом к информации о пользователях относятся:</p>
                        <ol>
                            <li>стандартные данные, автоматически получаемые http-сервером при доступе к Интернет-ресурсам (ip-адрес хоста, адрес запрошенного ресурса, время, тип и информация о программе просмотра, пославшей запрос ресурса, вид операционной системы пользователя, адрес Интернет-страницы, с которой был осуществлен переход на запрошенный ресурс, заголовок, содержащий идентификатор сессии для авторизованного пользователя);</li>
                            <li>данные электронных форм, заполняемых и направляемых Обществу по инициативе пользователей при регистрации и использовании соответствующих Интернет-ресурсов (профили пользователей – включая, без ограничения: имена пользователей, логины, пароли, имена и фамилии пользователей, пол, даты их рождения, контрольные секретные вопросы и ответы, адреса электронной почты, социометрические данные и данные об их предпочтениях, а также информация о действиях пользователей, выражающих их личное отношение к информации на Интернет-ресурсах – «нравится», «поделиться» и т.п);</li>
                            <li>данные, получаемые Обществом от партнеров и третьих лиц в рамках использования протоколов OpenID и OAuth;</li>
                            <li>информация, автоматически получаемая при доступе к Интернет-ресурсам и хранящаяся на стороне браузера, в том числе, но не ограничиваясь информацией содержащейся в закладках (cookies) (далее – информация, хранящаяся на стороне браузера);
                                Профили пользователей и информация, получаемая с помощью закладок, могут содержать информацию, идентифицирующую личность пользователей (персональные данные пользователей).
                                Вся собранная, хранящаяся и обработанная Обществом информация о пользователях считается информацией ограниченного доступа, если иное не установлено законодательством Российской Федерации или настоящим Регламентом.
                            </li>
                        </ol>
                    </li>

                    <li className={styles.politicsItem}>
                        <h4>Применимое законодательство.</h4>
                        <p>Рассматриваемые в настоящем Регламенте отношения, связанные со сбором, хранением, обработкой, распространением и защитой информации о пользователях Интернет-ресурсов, регулируются в соответствии с действующим законодательством Российской Федерации. Применение к ним норм иностранного права возможно исключительно в случаях, предусмотренных законодательством Российской Федерации и имеющими силу для Российский Федерации международными соглашениями.</p>
                    </li>

                    <li className={styles.politicsItem}>
                        <h4>Статус Регламента и официальных документов Общества.</h4>
                        <p>Официальными документами Общества, определяющими условия использования отдельных Интернет-ресурсов, включая совместные партнерские проекты и сервисы Общества, могут быть определены дополнительные условия, состав и порядок сбора, хранения, защиты, обработки и распространения информации о пользователях.
                            Настоящий Регламент имеет приоритет над вышеназванными документами и регламентами, которые применяются только в том случае, если не противоречат настоящему Регламенту и при условии, что указанными документами и регламентами явно не указано, что их положения в отношении защиты информации пользователей имеют преимущественную силу.</p>
                    </li>

                    <li className={styles.politicsItem}>
                        <h4>Условия обращения к Интернет-ресурсам Общества и согласие пользователя.</h4>
                        <p>Общество исходит из того, что пользователь, инициирующий обращение к Интернет-ресурсам:</p>
                        <ol>
                            <li>сознательно использует Интернет-ресурсы от своего имени и достоверно указывает информацию о себе в объеме и в случаях, когда это требуется при регистрации, доступе и использовании Интернет-ресурсов;</li>
                            <li>сознательно определил и контролирует настройки используемого им программного обеспечения в соответствии со своими предпочтениями относительно защиты информации, хранящейся на стороне браузера, персональных данных, информации о собственном аппаратно-программном обеспечении и интернет-соединении;</li>
                            <li>имеет возможность ознакомиться с правилами и протоколами информационного обмена, закрепленными в открытых стандартах Интернета;</li>
                            <li>ознакомился и имеет возможность в любой момент ознакомиться с настоящим Регламентом, с условиями использования соответствующих проектов и ресурсов Общества, и протоколов OpenID и OAuth.
                                    При регистрации и доступе к Интернет-ресурсам пользователю запрещается указывать о себе недостоверную и/или неполную информацию.
                                    Общество считает, что пользователь, регистрируясь и осуществляя доступ к Интернет-ресурсам, ознакомлен с настоящим Регламентом, выражает свое согласие с ним и принимает на себя указанные в нем права и обязанности. Согласие осуществляется в форме и на условиях, установленных для пользователей сети Интернет и пользователей Общества в Правилах пользования проектами и сервисами Общества.
                                    В случае несогласия пользователя с настоящим Регламентом использование Интернет-ресурсов должно быть прекращено.
                                    При регистрации на Интернет-ресурсе заполняя размещенную на Интернет-ресурсе Общества регистрационную форму и предоставляя свои персональные данные Обществу, Пользователь подтверждает, что он достиг возраста 14 лет и что он принимает настоящий Регламент и дает согласие на обработку своих персональных данных Обществу в соответствии с Политикой в отношении обработки персональных данных в Общества и сведениями о реализуемых требованиях к защите персональных данных, а также изложенными в ней правилами обработки персональных данных.
                                    Предоставляя данные третьих лиц, необходимые для использования Интернет-ресурса, пользователь подтверждает получение им согласия этих лиц на обработку их персональных данных или наличие у пользователя полномочий на выражение согласия от имени таких лиц.
                                    Согласие, предоставляемое пользователем при регистрации и сообщении своих персональных данных и персональных данных третьих лиц Обществу, также распространяется на передачу таких данных Обществом иным лицам в целях предоставления предусмотренных Интернет-ресурсом услуг в необходимом для этого объеме, в том числе – на трансграничную передачу персональных данных в случаях, когда она необходима для предоставления услуг, предусмотренных Интернет-ресурсом.
                                    Общество исходит из того, что регистрационную форму на Интернет-ресурсе заполняет непосредственно сам пользователь. Ответственность за правомерность предоставления и достоверность персональных данных пользователя и иных лиц, данные которых сообщены, несет исключительно пользователь. Поскольку Общество не проводит установление личности пользователя и не принимает на себя обязанности по такому установлению личности, Общество не отвечает за то, что пользователь действительно является тем лицом, от имени которого осуществлена регистрация на Интернет-ресурсе, и не несет ответственности за возможный ущерб, причиненный другим пользователям или иным лицам в случае, если пользователь не является таким лицом.
                                    Общество не принимает на себя никаких обязательств по проверке достоверности персональных данных, указанных пользователем, и не несет ответственности в случае, если пользователь предоставит больший объем данных, чем это предусмотрено размещенной на Интернет-ресурсе Общества регистрационной формой и целями обработки персональных данных, в том числе специальные категории персональных данных. Предоставляя персональные данные в объеме большем, чем это предусмотрено регистрационной формой и целями обработки персональных данных, пользователь выражает свое согласие на обработку таких персональных данных Обществом.
                                    Пользователь осознает и подтверждает, что при регистрации на Интернет-ресурсе с использованием аккаунтов пользователя в социальных сетях Общество может получить больший объем персональных данных по сравнению с объемом, который предусмотрен размещенной на Интернет-ресурсе Общества регистрационной формой, и что в этом случае на обработку таких данных Обществом дополнительное согласие пользователя не требуется.
                                    Предусматривается смешанная обработка персональных данных пользователей и иных лиц, персональные данные которых указаны при регистрации и использовании Интернет-ресурса, то есть как обработка без использования средств автоматизации, так и автоматизированная обработка с передачей полученной информации с использованием сети Интернет.
                                    Настоящее согласие предоставляется бессрочно на весь период использования Интернет-ресурса.
                                    Пользователь осведомлен, что может отозвать согласие на обработку персональных данных, направив Обществу заявление в бумажной или в электронной форме, в том числе с использованием своего аккаунта (учетной записи) на Интернет-ресурсе Общества с указанием в таком заявлении данных, предусмотренных Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
                                    В случае получения отзыва согласия пользователя на обработку персональных данных в бумажной форме Общество в целях идентификации субъекта персональных данных вправе запросить у такого лица дополнительные сведения, предоставленные субъектом персональных данных при регистрации на Интернет-ресурсе, либо попросить такое лицо направить электронный запрос на отзыв согласия на обработку персональных данных через соответствующий аккаунт (учетную запись) субъекта персональных данных на Интернет-ресурсе. В случае невыполнения обратившимся лицом таких дополнительных действий Общество вправе отказать такому лицу в отзыве согласия на обработку персональных данных в целях защиты прав третьих лиц.
                                    В случае отзыва ранее выданного согласия на обработку персональных данных пользователем или третьими лицами, персональные данные которых были получены Обществом от пользователя, указанные субъекты не смогут воспользоваться Интернет-ресурсом и предоставляемыми с его помощью услугами и возможностями.  
                                    Общество вправе продолжить обработку персональных данных пользователя после отзыва им своего согласия в случаях, предусмотренных законодательством Российской Федерации.
                                    Пользователь согласен на получение от Общества/ владельца Интернет-ресурса  информационных сообщений, любого вида рекламы и/или иных персонализированных сообщений, связанных с Интернет-ресурсом и/или тематикой Интернет-ресурса, а также с продуктами (услугами), которые могут направляться по адресу электронной почты, указанному пользователем при регистрации на Интернет-ресурсе, а также в виде смс-сообщений или иных видов сообщений - на номер телефона, указанный Пользователем при регистрации.
                                    Пользователь вправе в любое время и по любой причине отказаться от получения указанных сообщений путем прохождения по соответствующей ссылке, содержащейся в таком персонализированном сообщении.
                                    При этом пользователь уведомлен, что несет установленную законодательством РФ ответственность в случае указания некорректных контактных данных, а также данных  третьих лиц  без получения соответствующих полномочий от них.
                            </li>
                        </ol>
                    </li>

                    <li className={styles.politicsItem}>
                        <h4>Сбор и обработка информации о пользователях.</h4>
                        <p>Общество осуществляет сбор и обработку информации о пользователях в соответствии с настоящим Регламентом и иными официальными документами Общества, определяющими условия использования соответствующих Интернет-ресурсов, в целях исполнения своих обязанностей, установленных указанными документами.</p>
                        <p>Общество имеет право обрабатывать информацию о пользователях, полученную в результате обмена информацией с третьими лицами по протоколам OpenID и OAuth, при условии, что указанные третьи лица получат предварительное согласие пользователей на указанную обработку.</p>
                    </li>

                    <li className={styles.politicsItem}>
                        <h4>Ограничение получения информации от несовершеннолетних.</h4>
                        <p>Общество не имеет намерения получать информацию от несовершеннолетних и рекомендует законным представителям несовершеннолетних допускать их к работе в сети Интернет только под собственным контролем законным представителям.
                            Общество использует информацию о пользователях в целях защиты прав несовершеннолетних в рамках и пределах, установленных действующим законодательством.
                        </p>
                    </li>   

                    <li className={styles.politicsItem}>
                        <h4>Ограничение ответственности за достоверность получаемой информации.</h4>
                        <p>Общество не проверяет достоверность получаемой информации о пользователях и не осуществляет контроль за правосубъектностью пользователей.</p>
                    </li>   

                    <li className={styles.politicsItem}>
                        <h4>Хранение информации о пользователях.</h4>
                        <p>Общество осуществляет хранение информации о пользователях в соответствии с настоящим Регламентом и официальными документами Общества, определяющими правила использования соответствующих Интернет-ресурсов.</p>
                    </li>  

                    <li className={styles.politicsItem}>
                        <h4>Защита информации.</h4>
                        <p>Общество предпринимает все разумные меры по защите информации о пользователях от уничтожения, искажения или разглашения. Общество обеспечивает конфиденциальность соответствующей информации в пределах и на условиях, установленных действующим законодательством Российской Федерации и настоящим Регламентом.</p>
                    </li>  

                    <li className={styles.politicsItem}>
                        <h4>Доступ к информации о пользователях.</h4>
                        <p>Помимо Общества, доступ к информации о пользователях, при условии соблюдения требований законодательства Российской Федерации имеют:</p>
                        <ol>
                            <li>лица, права и обязанности которых по доступу к соответствующей информации установлены федеральными законами Российской Федерации;</li>
                            <li>пользователи Интернет-ресурсов – в части доступа к информации, идентифицирующей их личность (персональные данные пользователей), по указанному ими при регистрации паролю и логину;</li>
                            <li>пользователи Интернет-ресурсов – в части доступа к информации, идентифицирующей их личность (персональные данные пользователей), по указанному ими при регистрации паролю и логину;</li>
                            <li>пользователи проектов и сервисов Общества в пределах и на условиях, устанавливаемых соответствующими официальными документами Общества, определяющих их использование;</li>
                            <li>лица и организации, осуществляющие техническую поддержку служб и сервисов Общества в объеме, необходимом для осуществления такой технической поддержки, при условии соблюдения ими конфиденциальности информации о пользователях;</li>
                            <li>лица, обратившиеся в Общество в соответствии с Регламентом по рассмотрению жалоб и блокированию незаконного контента, при условии наличия заявления пользователя о несогласии с блокированием спорного (незаконного) контента.</li>
                        </ol>
                    </li>  
	
                    <li className={styles.politicsItem}>
                        <h4>Права пользователя в отношении информации.</h4>
                        <p>Общество гарантирует соблюдение следующих прав пользователя Интернет-ресурсов:</p>
                        <ol>
                            <li>право на получение сведений о том, осуществляется ли Обществом обработка информации, позволяющей идентифицировать личность пользователя (персональные данные);</li>
                            <li>право на удаление обрабатываемых персональных данных;</li>
                            <li>право на редактирование, уточнение или исправление обрабатываемых персональных данных при условии соблюдения требований настоящего Регламента.</li>
                        </ol>
                        <p>Удаление персональных данных происходит в течение 3 (трех) рабочих дней со дня поступления соответствующего запроса пользователя и может повлечь невозможность использования последним соответствующих Интернет-ресурсов.</p>
                        <p>Общество вправе удалить информацию о пользователе в случае нарушения последним норм официальных документов Общества, в том числе, определяющих условия использования отдельных Интернет-ресурсов.</p>
                        <p>Если таковая возможность предусмотрена в проектах и сервисах Общества, пользователь Интернет-ресурсов имеет право разрешить или запретить предоставление информации о себе партнерам Общества или третьим лицам по протоколам OpenID и OAuth. Общество обязуется в соответствующих официальных документах, определяющих правила использования проектов и сервисов Общества, указывать лиц, которым будет предоставлена данная информация, и условия указанного волеизъявления пользователя в отношении использования информации в рамках указанных протоколов.</p>
                        <p>Пользователь имеет право распространять собственные персональные данные любыми законными способами. Общество не несет ответственности за действия третьих лиц, которые получили доступ к информации о пользователях в результате указанного распространения, либо осуществили неправомерный доступ к охраняемой информации о пользователях.</p>
                    </li>  

                    <li className={styles.politicsItem}>
                        <h4>Ограничение распространения и предоставления информации о пользователях.</h4>
                        <p>Общество распространяет и/или предоставляет информацию о пользователях исключительно в следующих случаях:</p>
                        <ol>
                            <li>после обработки соответствующей информации (деперсонификации информации), повлекшей удаление сведений (включая адреса электронной почты), позволяющих идентифицировать личность пользователя, а также после статистической обработки информации;</li>
                            <li>с разрешения лиц, предоставивших Обществу при регистрации на соответствующих Интернет-ресурсах собственные профили;</li>
                            <li>предоставление информации лицам, указанным в п.11 настоящего Регламента.</li>
                        </ol>
                    </li>  

                    <li className={styles.politicsItem}>
                        <h4>Ограничение использования информации из профилей пользователей.</h4>
                        <p>Общество использует для авторизации доступа к Интернет-ресурсам информацию из профилей пользователей (логин и пароль, контрольные секретный вопрос и ответ). При этом Общество вправе предоставлять такие данные лицам, указанным в п.11  настоящего Регламента. Ответственность за сохранность данной информации, включая логин и пароль, несет пользователь. Любые действия, совершенные с ее использованием, считаются Обществом совершенными пользователем. Передача собственного логина и пароля пользователем третьим лицам запрещена.</p>
                        <p>В случае, если пользователю стали известны логин и пароль другого пользователя, а также иная конфиденциальная информация о последнем, он обязан уведомить об этом Общество и не использовать ставшую известной ему указанную информацию.</p>
                        <p>Общество использует информацию о пользователях для целей анализа интересов и предпочтений пользователей, адаптации проектов и сервисов Обществасогласно результатам полученным по итогам проведения вышеуказанного анализа, а также для целей рекламы на Интернет-ресурсах в пределах, необходимых ее показа целевой аудитории.</p>
                        <p>Информация из профилей пользователей не используется Обществом для рассылки пользователям любой информации, за исключением случаев, предусмотренных правилами (регламентами) использования соответствующих Интернет-ресурсов, или по их явному запросу.</p>
                    </li>  

                    <li className={styles.politicsItem}>
                        <h4>Использование информации, хранящейся на стороне браузера.</h4>
                        <p>Общество использует информацию, хранящуюся на стороне браузера, в соответствии с целями, определенными настоящим Регламентом, для определения уникального идентификатора доступа пользователя к Интернет-ресурсам, для следующих целей:</p>
                        <ol>
                            <li>поддержки функционирования ресурсов, требующих использования информации, хранящейся на стороне браузера;</li>
                            <li>показа рекламы для целевой аудитории;</li>
                            <li>измерения размеров аудиторий сайтов, их объединений и пересечений;</li>
                            <li>определения статистических информационных предпочтений пользователей при доступе к различным Интернет-ресурсам;</li>
                            <li>определения в исследовательских целях корреляции статистических данных о посещаемости сайта с социометрическими данными о пользователях Общества.</li>
                        </ol>
                        <p>Путем настройки программного обеспечения пользователь имеет возможность запретить использование информации, хранящейся в браузере, на своем компьютере, однако это может привести к частичной или полной потере функциональности Интернет-ресурсов.</p>
                        <p>Общество вправе предоставлять соответствующую информацию лицам, указанным в п.11 настоящего Регламента.</p>
                    </li>  

                    <li className={styles.politicsItem}>
                        <h4>Доступ к Интернет-ресурсам Общества и Интернет-ресурсам третьих лиц.</h4>
                        <p>Доступ пользователя к Интернет-ресурсам Общества может вызывать обращение на Интернет-ресурсы третьих лиц и загрузку с них программного кода и/или графических объектов (в том числе, невидимых при отображении Интернет-страниц браузером), используемых в рекламных целях и в целях сбора статистики. Владельцы Интернет-ресурсов имеют техническую возможность осуществлять сбор информации о пользователях и самостоятельно определяют условия ее использования.</p>
                        <p>Путем настройки программного обеспечения пользователь имеет возможность заблокировать запросы на графические изображения, размещенные на серверах третьих лиц, однако это может привести к потере читаемости и появлению ошибок при отображении ресурсов.</p>
                        <p>При переходе пользователей со страниц Интернет-ресурсов Общества на страницы Интернет-ресурсов третьих лиц пользователи самостоятельно определяют пределы использования информации о них в рамках условий и правил, определяемых владельцами соответствующих Интернет-ресурсов. Последние при этом имеют технологическую возможность доступа к информации, хранящейся на стороне браузера, и несут ответственность за соблюдение прав пользователей в связи с ее использованием.</p>
                    </li>  

                    <li className={styles.politicsItem}>
                        <h4>Ограничение действия Регламента в отношении Интернет-ресурсов и действий третьих лиц.</h4>
                        <p>Интернет-ресурсы, поддерживаемые Обществом, содержат ссылки на Интернет-ресурсы третьих лиц, на которых настоящий Регламент не распространяется. Общество рекомендует пользователям запрашивать информацию о режиме использования данных о пользователях непосредственно у владельцев этих ресурсов.</p>
                        <p>Общество не несет ответственности за действия третьих лиц, использующих Интернет-ресурсы Общества в своей деятельности, и настоятельно рекомендует пользователям не предоставлять без достаточных на то оснований собственные персональные данные третьим лицам.</p>
                        <p>Общество не несет ответственности за организацию использования протоколов OpenID и OAuth третьими лицами и надлежащее обеспечение последними защиты информации о пользователях, а также получение законного предварительного согласия пользователей на обработку Обществом их персональных данных в рамках использования указанных протоколов.</p>
                        <p>В случае совместных партнерских проектов и сервисов Общества в официальных документах последнего и/или документах партнеров, определяющих использование соответствующих Интернет-ресурсов, должно быть указано, как осуществляется обработка информации о пользователях всеми партнерами, включая информацию о том, кто хранит и обрабатывает персональные данные пользователей. Общество не несет ответственности за несоблюдение указанными лицами требований действующего законодательства Российской Федерации.</p>
                    </li>  

                    <li className={styles.politicsItem}>
                        <h4>Обращения пользователей.</h4>
                        <p>Общество рассматривает обращения, связанные с настоящим Регламентом, включая запросы пользователей относительно использования их персональных данных, по адресу электронной почты: info@aucma-rus.ru или по регулярной почте по адресу: 117246, г. Москва, Научный проезд, 8с1, офис 413.</p>
                        <p>Срок ответа на поступившие обращения составляет 10 рабочих дней с даты получения соответствующих запросов. Анонимные обращения не рассматриваются.</p>
                        <p>Вся корреспонденция, направленная пользователями в адрес Общества (письма в обычной или электронной форме) воспринимаются Обществом как информация ограниченного доступа и может быть опубликована только с письменного согласия пользователя, а адреса, персональные данные и иная информация о пользователях, направивших эти письма, не могут быть без специального их согласия использованы иначе, как для ответа по теме полученного обращения.</p>
                    </li> 

                    <li className={styles.politicsItem}>
                        <h4>Доступ к Регламенту.</h4>
                        <p>Настоящий Регламент является открытым и общедоступным документом. Его действующая редакция доступна в Интернете по Интернет-ссылке размещенной по адресу:  https://aucma-rus.ru</p>
                        <p>Общество не ведет сбор информации о пользователях, связанный с доступом к данной интернет-странице.</p>
                    </li> 

                    <li className={styles.politicsItem}>
                        <h4>Право Общества на изменение Регламента.</h4>
                        <p>Настоящая редакция Регламента вступила в силу «01» сентября 2024 года. Общество сохраняет за собой право в любое время изменить положения настоящего Регламента, уведомив об этом пользователей в Интернете по адресу, на котором размещен настоящий Регламент. </p>
                    </li> 
                </ol>
            </Container>
        </section>
    )
}