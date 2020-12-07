import React from 'react'
import { Grid, Hidden, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from '../../styles'
import Bazar from '../../assets/images/Footer/Bazar.jpg'
import googlePlay from '../../assets/images/Footer/googlePlay.jpg'
import IOSType from '../../assets/images/Footer/IOSType.jpg'
import Namad from '../../assets/images/Footer/Namad.jpg'
import resaneDigital from '../../assets/images/Footer/resaneDigital.jpg'

export default function Footer() {
    const classes = useStyles();
    const convertfunction = (val) => {
        var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return val.replace(/[0-9]/g,
            function (w) { return id[+w] });
    }

    return (
        <footer className={classes.footer}>
            <Grid container direction="column" className={classes.Insidefooter}>
                <Grid container item className={classes.footerTop}>
                    <Grid item container direction="row" xs={6} alignItems="center" className={classes.footerTopRight}>
                        <Typography className={classes.footerTopRightText}>هفت روز هفته 24 ساعت شبانه روز پاسخگوی شما هستیم</Typography>
                    </Grid>
                    <Grid item container direction="column" justify="center" alignItems="flex-end" xs={6} className={classes.footerTopLeft}>
                        <Grid item className={classes.footerTopLeftTop}>
                            <Typography className={classes.footerTopLeftTopText}>برنادل را در شبکه های اجتماعی دنبال کنید</Typography>
                        </Grid>
                        <Grid item container justify="space-between" className={classes.footerTopLeftBottom}>
                            <span className={classes.AparatIcon}></span>
                            <span className={classes.LinkdinIcon}></span>
                            <span className={classes.TelegramIcon}></span>
                            <span className={classes.InstagramIcon}></span>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item alignItems="center" justify="space-between" className={classes.footerMain}>
                    <ul className={classes.footerMainListItem}>
                        <li><span className={classes.oneArrow}></span> مقاله ها</li>
                        <li><span className={classes.oneArrow}></span> اخبار سایت</li>
                        <li><span className={classes.oneArrow}></span> قوانین سایت</li>
                        <li><span className={classes.oneArrow}></span> ابزارهای کمک درسی</li>
                        <li><span className={classes.oneArrow}></span> تماس با ما </li>
                        <li><span className={classes.oneArrow}></span> درباره ما</li>
                    </ul>
                    <Grid item className={classes.footerMainBigImage}  >
                        <p className={classes.FooterBigImageText}>
                            سایت برنادل برای شما طراحی شده است.
                        </p>
                        <p className={classes.FooterBigImageText}>
                            آیا دانش وفنونی آموخته اید که می توانید آن را در اختیار دیگران قرار دهیدو کسب درآمد کنید؟
                        </p>
                        <p className={classes.FooterBigImageText}>
                            آیا نیاز به آموزش دارید ونمی دانید از چه منبعی آن را به دست آورید؟
                        </p>
                        <p className={classes.FooterBigImageText}>
                            شما می توانید بهترین فرآیند آموزش آنلاین را در برنادل پیدا کنید.
                        </p>
                    </Grid>
                    <div className={classes.footerMainSmallImageContainer}>
                        <div className={classes.footerMainSmallImageRight} >
                            <img src={resaneDigital} className={classes.resaneDigital} />
                        </div>
                        <div className={classes.footerMainSmallImage}>
                            <img src={Namad} className={classes.namad} />
                        </div>
                    </div>
                </Grid>
                <Grid container item className={classes.footerBottom}>
                    <Grid item container direction="column" justify="center" xs={6} className={classes.footerBottomRight}>
                        <Grid item container direction="column" justify="center" className={classes.footerBottomRightInsider}>
                            <Grid item container alignItems="center" wrap="nowrap">
                                <span className={classes.NavigationIcon}></span>
                                <Typography className={classes.AddressText}>اتوبان نواب ، بین کلهر و آزادی ، جنب یوسفیان ، پلاک
                                <Typography component="span" style={{ display: "inline-block", fontFamily: "IRANSansNUMNumber" }}>653</Typography>
                                 ، واحد <Typography component="span" style={{ display: "inline-block", fontFamily: "IRANSansNUMNumber" }}>5</Typography></Typography>
                            </Grid>
                            <Grid item container wrap="nowrap" >
                                <Grid item container wrap="nowrap" className={classes.footerBottomRightPhone}>
                                    <span className={classes.PhoneIcon}></span>
                                    <Typography className={classes.FarsiNumberFooterText}>66 95 56 66 021</Typography>

                                </Grid>
                                <Grid item container wrap="nowrap" className={classes.footerBottomRightMail}>
                                    <span className={classes.MailIcon}></span>
                                    <Typography className={classes.emalText}>bornadel@gmail.com</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container justify="flex-end" alignItems="center" className={classes.footerBottomLeft} xs={6}>
                        <Grid item className={classes.footerBottomLeftRect}>
                            <img src={IOSType} className={classes.FooterImage} />
                        </Grid>
                        <Grid item className={classes.footerBottomLeftRect}>
                            <img src={googlePlay} className={classes.FooterImage} />
                        </Grid>
                        <Grid item className={classes.footerBottomLeftRect}>
                            <img src={Bazar} className={classes.FooterImage} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}
