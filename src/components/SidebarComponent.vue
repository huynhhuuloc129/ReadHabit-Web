<script setup>
import $ from "jquery";

$(function() {
'use strict';
$('.js-menu-toggle').click(function(e) {

  var $this = $(this);

  if ( $('body').hasClass('show-sidebar') ) {
    $('body').removeClass('show-sidebar');
    $this.removeClass('active');
  } else {
    $('body').addClass('show-sidebar');	
    $this.addClass('active');
  }

  e.preventDefault();
  $(document).mouseup(function(e) {
    var container = $(".sidebar");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ( $('body').hasClass('show-sidebar') ) {
				$('body').removeClass('show-sidebar');
				$('body').find('.js-menu-toggle').removeClass('active');
			}
    }
	}); 
});

});
</script>

<template>

  <aside class="sidebar ">
    <div class="menu toggle text-white" >
        <svg data-toggle="collapse" data-target="#main-navbar" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list burger js-menu-toggle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
    </div>
      <div class="side-inner">

        <div class="profile">
          <img src="../images/person_profile.jpg" alt="Image" class="img-fluid">
          <h3 class="name">Debby Williams</h3>
          <span class="country">New York, USA</span>
        </div>

        <div class="counter d-flex justify-content-center">
          <!-- <div class="row justify-content-center"> -->
            <div class="col">
              <strong class="number">892</strong>
              <span class="number-label">Posts</span>
            </div>
            <div class="col">
              <strong class="number">22.5k</strong>
              <span class="number-label">Followers</span>
            </div>
            <div class="col">
              <strong class="number">150</strong>
              <span class="number-label">Following</span>
            </div>
          <!-- </div> -->
        </div>
        
        <div class="nav-menu">
          <ul>
            <li><a href="#"><span class="icon-home mr-3"></span>Feed</a></li>
            <li><a href="#"><span class="icon-search2 mr-3"></span>Explore</a></li>
            <li><a href="#"><span class="icon-notifications mr-3"></span>Notifications</a></li>
            <li><a href="#"><span class="icon-location-arrow mr-3"></span>Direct</a></li>
            <li><a href="#"><span class="icon-pie-chart mr-3"></span>Stats</a></li>
            <li><a href="#"><span class="icon-sign-out mr-3"></span>Sign out</a></li>
          </ul>
        </div>
      </div>
      
    </aside>
</template>

<style>

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease; }
  a, a:hover {
    text-decoration: none !important; }


body {
  position: relative; }
  body:before {
    position: absolute;
    content: "";
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: .3s all ease-in-out;
    -o-transition: .3s all ease-in-out;
    transition: .3s all ease-in-out; }
  body.show-sidebar:before {
    opacity: 1;
    visibility: visible; }

.site-section {
  padding: 7rem 0; }

aside {
  height: 100vh;
  min-height: 580px; 
  top: 0;
  width: 300px;
  left: 0;
  z-index: 1001;
  position: fixed;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  background-color: #fff;
  -webkit-transition: 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1), 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1); }
  .show-sidebar aside {
    -webkit-transform: translateX(0%);
    -ms-transform: translateX(0%);
    transform: translateX(0%); }
  aside .toggle {
    padding-left: 25px;
    padding-top: 20px;
    position: absolute;
    right: 0;
    -webkit-transform: translateX(100%);
  }
    .show-sidebar aside .toggle .burger:before, .show-sidebar aside .toggle .burger span, .show-sidebar aside .toggle .burger:after {
      background: #fff; }
  .show-sidebar aside {
    -webkit-box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1); }
  aside .side-inner {
    padding: 30px 0;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch; }
    aside .side-inner .profile {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #efefef; }
      aside .side-inner .profile img {
        width: 80px;
        margin: 0 auto 20px auto;
        border-radius: 50%; }
      aside .side-inner .profile .name {
        font-size: 18px;
        margin-bottom: 0; }
      aside .side-inner .profile .country {
        font-size: 14px;
        color: #cfcfcf; }
    aside .side-inner .counter {
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #efefef;
      text-align: center; }
      aside .side-inner .counter div .number {
        display: block;
        font-size: 20px;
        color: #000; }
      aside .side-inner .counter div .number-label {
        color: #cfcfcf; }
    aside .side-inner .nav-menu ul, aside .side-inner .nav-menu ul li {
      padding: 0;
      margin: 0px;
      list-style: none; }
    aside .side-inner .nav-menu ul li a {
      display: block;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 10px;
      padding-bottom: 10px;
      color: #8b8b8b;
      position: relative;
      -webkit-transition: .3s padding-left ease;
      -o-transition: .3s padding-left ease;
      transition: .3s padding-left ease; }
      aside .side-inner .nav-menu ul li a:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0px;
        background-color: blue;
        opacity: 0;
        visibility: hidden;
        -webkit-transition: .3s opacity ease, .3s visibility ease, .3s width ease;
        -o-transition: .3s opacity ease, .3s visibility ease, .3s width ease;
        transition: .3s opacity ease, .3s visibility ease, .3s width ease; }
      aside .side-inner .nav-menu ul li a:active, aside .side-inner .nav-menu ul li a:focus, aside .side-inner .nav-menu ul li a:hover {
        outline: none; }
      aside .side-inner .nav-menu ul li a:hover {
        background: #fcfcfc;
        color: #000; }
        aside .side-inner .nav-menu ul li a:hover:before {
          width: 4px;
          opacity: 1;
          visibility: visible; }
    aside .side-inner .nav-menu ul li.active a {
      background: #fcfcfc;
      color: #000; }
      aside .side-inner .nav-menu ul li.active a:before {
        opacity: 1;
        visibility: visible;
        width: 4px; }

.burger {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  z-index: 99;
  float: left;
 }

.burger:before, .burger span, .burger:after {
  width: 100%;
  height: 2px;
  display: block;
  background: #000;
  border-radius: 2px;
  position: absolute;
  opacity: 1; }

.burger:before, .burger:after {
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  content: ""; }

.burger:before {
  top: 4px; }

.burger span {
  top: 15px; }

.burger:after {
  top: 26px; }

/* Hover */
.burger:hover:before {
  top: 7px; }

.burger:hover:after {
  top: 23px; }

/* Click */
.burger.active span {
  opacity: 0; }

.burger.active:before, .burger.active:after {
  top: 40%; }

.burger.active:before {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=5);
  /*for IE*/ }

.burger.active:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=-5);
  /*for IE*/ }

.burger:focus {
  outline: none; }
</style>
