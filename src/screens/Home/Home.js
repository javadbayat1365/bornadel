import { Grid, Typography, Button } from '@material-ui/core'
import React, { useState, useContext, useEffect } from 'react'
import useStyles from '../../styles'
import SliderShow from '../../components/Sliders/HomeSlider/Slider'
import BestAcademySlider from '../../components/Sliders/HomeBestAcademy/BestAcademySlider'
import CirleStatistic from '../../components/UsersStatistic/usersStatisticCircle'
import CoursesComponent from '../../components/CoursesComponent/CoursesComponent'
import RecentView from '../../components/Sliders/RecentViewSlider/RecentView'
import Offers from '../../components/Sliders/Offers'
import CircleMenu from '../../components/CircleMenu'
import { HomePageContext } from '../../contexts/HomePageContext'
import Apis from '../../constants/Api'
import x1 from '../../assets/images/1x.jpg'
import x2 from '../../assets/images/2x.jpg'
import x3 from '../../assets/images/3x.jpg'
import comersial from '../../assets/images/comersial.jpg'




export default function Home() {
    const classes = useStyles();
    let { news, articles } = useContext(HomePageContext)
    const [BannerContainerHeight, setBannerContainerHeight] = useState(0)
    const [BannerContainerWidth, setBannerContainerWidth] = useState(0)
    const [imageWidth, setImageWidth] = useState(0)
    useEffect(() => {
        let BannerContainer = document.querySelector('#BannerContainer')
        let ImageWidthState = document.querySelector('#ImageWidth')
        setBannerContainerHeight(BannerContainer.offsetHeight)
        setBannerContainerWidth(BannerContainer.offsetWidth)
        setImageWidth(ImageWidthState.offsetWidth)
    }, [])
    


    return (
        < >
            <Grid container justify="center">
                <Grid container justify="center" className={classes.banneImages}>
                    <Grid item xs={3} container direction="column" justify="space-between" className={classes.ImagesIntopHome}
                        style={{ height: Math.floor(BannerContainerWidth / 2) }}  >
                        <Grid item className={classes.education1} style={{ height: ((BannerContainerWidth / 2) / 3) - 10, }} >
                            <img src={x1} className={classes.educationImage1} />
                            <Button variant="contained" className={classes.educationButton1} >
                                <Typography className={classes.SignInText}>ثبت نام</Typography>
                                <span className={classes.educationButtonIcon1}></span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.education2} id="ImageWidth" style={{ height: ((BannerContainerWidth / 2) / 3) - 10 }} >
                            <img src={x2} className={classes.educationImage2} />
                            <Button variant="contained" className={classes.educationButton2}>
                                <Typography className={classes.SignInText}>ثبت نام</Typography>
                                <span className={classes.educationButtonIcon2}></span>
                            </Button>
                        </Grid>
                        <Grid item className={classes.education3} style={{ height: ((BannerContainerWidth / 2) / 3) - 10 }} >
                            <img src={x3} className={classes.educationImage3} />
                            <Button variant="contained" className={classes.educationButton3} >
                                <Typography className={classes.SignInText}>ثبت نام</Typography>
                                <span className={classes.educationButtonIcon3}></span>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={9} className={classes.BannerContainer} style={{ height: Math.floor(BannerContainerWidth / 2) }} id="BannerContainer" >
                        <SliderShow
                            duration={4000}
                            dots={true}
                            arrow={true}
                            type="fade"
                            radious={8}
                        />
                    </Grid>
                </Grid>
            </Grid>
            {/* =======================================CircleMenu================================================ */}

            <Grid container item justify="center" style={{ width: "100%", backgroundColor: "#c5e4ff", marginTop: 20 }}>
                <Grid container className={classes.circleMenu}
                    onClick={() => eval`CM.out(0)`}>
                    <CircleMenu />
                </Grid>
            </Grid>
            {/* =======================================UsersStatistic================================================ */}
            {/* <Grid container justify="center" className={classes.usersStatistic}>
                <Grid item className={classes.usersStatisticContainer}>
                    <Grid container justify="center" className={classes.usersStatistiTitleContainer}>
                        <Typography className={classes.usersStatistiTitle}>آمار کاربران سایت</Typography>
                    </Grid>
                    <Grid item container justify="center" className={classes.usersStatisticIcons}>
                        <Grid container justify="space-between" item className={classes.InsideusersStatisticIcons}>
                            <Grid item className={classes.statisticIcon1}></Grid>
                            <Grid item className={classes.statisticIcon2}></Grid>
                            <Grid item className={classes.statisticIcon3}></Grid>
                            <Grid item className={classes.statisticIcon4}></Grid>
                        </Grid>
                    </Grid>
                    <CirleStatistic />
                    <Grid container justify="space-between" className={classes.usersStatisticBottomText}>
                        <Grid item className={classes.usersStatistiText1}>مدرسین</Grid>
                        <Grid item className={classes.usersStatistiText2}>آموزشگاه ها</Grid>
                        <Grid item className={classes.usersStatistiText3}>دانشجوها</Grid>
                        <Grid item className={classes.usersStatistiText4}>دوره ها</Grid>
                    </Grid>
                </Grid>
            </Grid> */}
            {/* =======================================BestAcademy================================================ */}
            <Grid container item justify="center" className={classes.BestAcademyConyainer} >
                <Grid container item justify="space-between" alignItems="center" className={classes.BestAcademy}  >
                    <Grid item className={classes.BestAcademyTitleContainer}>
                        <Typography className={classes.BestAcademyTitle}>آموزشگاه های برتر</Typography>
                    </Grid>
                    <Grid item className={classes.BestAcademySliderContainer}>
                        <BestAcademySlider />
                    </Grid>
                </Grid>
            </Grid>
            {/* =======================================Banner Under BestAcademy================================================ */}
            <Grid container item justify="center" style={{ width: "100%" }}>
                <Grid container className={classes.BannerUnderBestAcademyContainer}>
                    <Grid item className={classes.BannerUnderBestAcademy}>
                        <img src={comersial} className={classes.BannerUnderBestAcademyImage} />
                    </Grid>
                </Grid>
            </Grid>

            {/* =============================================Recent view================================================ */}
            <Grid container item justify="center" style={{ width: "100%", padding: "0 45px 0 40px" }}>
                <Grid container justify="space-between" item className={classes.homeCursesComponent}>
                    <Grid item sm={10}>
                        <Grid item sm={12} container direction="column" className={classes.CursesComponentContainer}>
                            <Grid item ><Grid item className={classes.HeaderCursesComponentContainer}><Typography className={classes.HeaderCursesComponentText}>بازدید های اخیر شما</Typography></Grid></Grid>
                            <RecentView />
                        </Grid>
                    </Grid>
                    <Grid item container alignItems="flex-start" justify="center" xs={2} className={classes.aloneCursesComponentContainer}>
                        <Grid item container  xs={12} className={classes.aloneCursesComponent}>
                            <Grid item className={classes.HeaderCursesComponentContainer2} style={{ borderImage: "linearGradient: to bottom,red,rgba(0, 0, 0, 0)) 1 100%" }}><Typography className={classes.HeaderCursesComponentText2}>پیشنهادات ویژه</Typography></Grid>
                            <Grid item className={classes.aloneCursesComponentMain}  xs={12}>
                                <Offers />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* =============================================Articles & news=============================================== */}
            <Grid container item justify="center" style={{ width: "100%", marginTop: 0 }}>

                <Grid container justify="space-between" className={classes.ArticlesNews}>
                    <Grid container item xs={7} className={classes.ArticleContainerBox}>
                        <Grid item xs={12} container direction="column" className={classes.ArticleContainer}>
                            <Grid container justify="space-between" item className={classes.ArticleHeader}>
                                <Typography className={classes.ArticleHeaderText}>مقالات</Typography>
                                <Typography className={classes.ArticleHeaderText2}>همه
                            <span className={classes.articleNewsArrow} />
                                    <span className={classes.articleNewsArrow} />
                                </Typography>
                            </Grid>
                            <Grid container direction="column" justify="space-between" item className={classes.ArticleNewsContainer} >
                                {
                                    articles && articles.length > 0 ? articles.map((item, index) => {
                                        return (
                                            <Grid container item key={index} className={classes.ArticleMain}>
                                                <Grid item className={classes.ArticleREctPhotoContainer}>
                                                    <img src={item.teacher_PhotoLink ? Apis.SHOWIMAGE + item.article_PhotoLink : item.teacher_PhotoLink ? Apis.SHOWIMAGE + item.photoLink : null} className={classes.ArticleREctPhoto} />
                                                </Grid>
                                                <Grid item className={classes.ArticleRCirclePhoto}>
                                                    <img src={Apis.SHOWIMAGE + item.article_PhotoLink} style={{ display: "block", height: "100%", objectFit: "cover", width: "100%", }} />
                                                </Grid>
                                                <Grid  item className={classes.ArticleLeft}>
                                                    <Grid item className={classes.ArticleTitle}>{item.article_Title}</Grid>
                                                    <Grid container><Typography className={classes.ArticleTextField}>{item.article_Summary}</Typography></Grid>
                                                    <Grid container justify="flex-end"><Typography className={classes.ReadMore} >ادامه مطلب <span className={classes.threeArrow}></span></Typography></Grid>
                                                </Grid>
                                            </Grid>
                                        )
                                    })
                                        : null
                                }
                            </Grid>


                        </Grid>
                    </Grid>
                    <Grid item xs={5} container direction="column" className={classes.NewsContainer}>
                        <Grid container justify="space-between" item className={classes.ArticleHeader}>
                            <Typography className={classes.ArticleHeaderText}>اخبار</Typography>
                            <Typography className={classes.ArticleHeaderText2}>همه
                            <span className={classes.articleNewsArrow} />
                                <span className={classes.articleNewsArrow} />
                            </Typography>
                        </Grid>
                        <Grid container justify="space-between" className={classes.ArticleNewsContainer}>
                            {
                                news && news.length > 0 ? news.map((item, index) => {
                                    return (
                                        <Grid container key={index} item className={classes.ArticleMain}>
                                            <Grid item ><img src={Apis.SHOWIMAGE + item.news_PhotoLink} className={classes.NewsREctPhoto} /></Grid>
                                            <Grid container item className={classes.ArticleLeft}>
                                                <Grid item className={classes.NewsTitle}>{item.news_Title}</Grid>
                                                <Grid container><Typography className={classes.ArticleTextField}>{item.news_Summary}</Typography></Grid>
                                                <Grid container justify="flex-end"><Typography className={classes.ReadMore} >ادامه مطلب <span className={classes.threeArrow}></span></Typography></Grid>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                                    : null
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
