import React from 'react';
import SlimHeader from '../MegaHeader/SlimHeader';
import { Link } from 'react-router-dom';
import Headersearch from './HeaderSearch';
import Customredirect from './CustomRedirect'
import HeaderBanner from './HeaderBanner';

export const Header = (props) => (
  <div>
    <header className="Header  u-hiddenPrint">
      {!props.styleProps.theme && <HeaderBanner />}
      <div className="Header-navbar u-background-50">
        <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">
          <div className="Header-logo Grid-cell" aria-hidden="true">
            <Link to={"/"}>
              <img src={props.styleProps.headerLogo} alt="" />
            </Link>
          </div>
          <div className="Header-title Grid-cell">
            <h1 className="Header-titleLink">
              <Link role="button" to={"/"}>
                {props.styleProps.headerSiglaTool} <span className="u-lg-hidden u-md-hidden u-sm-hidden u-cf u-padding-top-xxs u-block"></span>
                <span className="u-color-20 u-text-xxs u-alignMiddle u-padding-right-xxs u-padding-left-xxs">alpha</span>
                <br /><small>{props.styleProps.headerDescTool}</small>
              </Link>
            </h1>
          </div>
          <div className="Header-utils Grid-cell">
            <div className="Header-social Headroom-hideme">
              <p>Seguici su</p>{" "}
              <ul className="Header-socialIcons">
                <li>
                  <a href={props.styleProps.twitterURL} title="twitter">
                    <span className="Icon-twitter"></span>
                    <span className="u-hiddenVisually">Twitter</span>
                  </a>
                </li>
                {" "}
                <li>
                  <a href={props.styleProps.mediumURL} title="medium">
                    <span className="Icon-medium"></span>
                    <span className="u-hiddenVisually">Medium</span>
                  </a>
                </li>
              </ul>
            </div>
            <Headersearch history={props.history} />
          </div>
        </div>
      </div>
      <div className="Headroom-hideme u-textCenter u-hidden u-sm-hidden u-md-block u-lg-block">
        <nav className="Megamenu Megamenu--default js-megamenu u-background-50 is-ready" data-rel=".Offcanvas .Treeview">
          <ul className="Megamenu-list Megamenu">
            <li data-megamenu-class="Megamenu-item Megamenu-item--vert" className="Megamenu-item Megamenu-item--vert">
              <a href="#" className="Linklist-link">Il Progetto</a>
              <ul>
                <li><Customredirect history={props.history} to='/missione' label='Missione' /></li>
                <li><Customredirect history={props.history} to='/team' label='Chi Siamo' /></li>
                <li><Customredirect history={props.history} to='/lineeguida' label='Linee Guida' /></li>
              </ul>
            </li>

            <li data-megamenu-class="Megamenu-item Megamenu-item--vert" className="Megamenu-item Megamenu-item--vert">
              <a href="#" className="Linklist-link">Community</a>
              <ul>
                <li><Customredirect history={props.history} to='/crea' label='Data Stories' /></li>
                {/* <li><Customredirect history={props.history} to='/dashboardsList' label='Dashboards' /></li> */}
                <li><a href="https://developers.italia.it/news" target="_blank" className="Linklist-link">Notizie</a></li>
                <li><a href="https://forum.italia.it" target="_blank" className="Linklist-link">Forum</a></li>
              </ul>
            </li>
            <li data-megamenu-class="Megamenu-item Megamenu-item--vert" className="Megamenu-item Megamenu-item--vert">
            <Customredirect history={props.history} to='/partecipa' label='Partecipa' />
              {/*<a href="#" className="Linklist-link">Partecipa</a>
              <ul>
                <li><Customredirect history={props.history} to='/partecipa' label='Partecipa' /></li>
              </ul>*/}
            </li>
            <li data-megamenu-class="Megamenu-item Megamenu-area u-background-40 u-padding-left-none" className="Megamenu-item Megamenu-area u-background-40 u-padding-left-none">
              <a href="https://dataportal-private.daf.teamdigitale.it" id="megamenu-1515065130642-9">Accedi</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section className="Offcanvas Offcanvas--right Offcanvas--modal js-fr-offcanvas u-jsVisibilityHidden u-nojsDisplayNone u-hiddenPrint" id="menu">
      <h2 className="u-hiddenVisually">Menu di navigazione</h2>
      <div className="Offcanvas-content u-background-white">
        <div className="Offcanvas-toggleContainer u-background-70 u-jsHidden">
          <a className="Hamburger-toggleContainer u-block u-color-white u-padding-bottom-xxl u-padding-left-s u-padding-top-xxl js-fr-offcanvas-close"
            aria-controls="menu" aria-label="esci dalla navigazione" title="esci dalla navigazione" href="#">
            <span className="Hamburger-toggle is-active" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  </div>
)