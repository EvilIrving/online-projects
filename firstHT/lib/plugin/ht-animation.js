!function(N){"use strict";var G=N.ht,S=G.Default,e="prototype",_=G.DataModel[e],G=G.Data[e],j=null,E=(S.getEasing=function(G){var N=j,N=0<=G.indexOf(".")?(G=G.split("."),c[G[0]][G[1]]):c[G];return function(G){return N(G,0,1,1)}},S.getCommonEasing=function(G){return 0<=G.indexOf(".")?(G=G.split("."),c[G[0]][G[1]]):c[G]},G.setAnimation=function(G){var N=this._animation;N!==(this._animation=G)&&(this._animationprocess=j,this._animationstatus=j),this.fp("animation",N,G)},G.getAnimation=function(){return this._animation},G.pauseAnimation=function(){this._pauseAnimation||(this._pauseAnimation=!0,this._pauseTime=Date.now())},G.resumeAnimation=function(){delete this._pauseAnimation},N.requestAnimFrame=N.requestAnimationFrame||N.webkitRequestAnimationFrame||N.mozRequestAnimationFrame||function(G){N.setTimeout(G,1e3/60)},N.requestAnimFrame),R=N.setInterval,c=(_.setAnimationInterval=function(G){var N=this;N.$2a=G,N.$1a!=j&&(clearInterval(N.$1a),delete N.$1a,N.enableAnimation(G))},_.getAnimationInterval=function(){return this.$2a||"animationFrame"},_.getDataAnimation=function(G){return G.getAnimation()},_.enableAnimation=function(G){var N,P=this,e=P.getDatas();P.$1a==j&&(G&&P.setAnimationInterval(G),G=P.getAnimationInterval(),N=function(){var h=P.getAnimationInterval();e.each(function(e){var G=P.getDataAnimation(e);if(e.setAnimation(G),G&&!e._pauseAnimation)for(var N=G.start,_=(e._animationstatus=e._animationstatus||{},e._animationprocess=e._animationprocess||N.slice(0),e._animationstatus),E=e._animationprocess,R=0;R<E.length;R++)if(null!=E[R]){var c=_[R]||(_[R]={$5a:0,$6a:0,$7a:0,$8a:0}),I=G[E[R]],Q=I.property,B=I.accessType,m=I.from,l=I.to,a=I.easing||"Quad.easeOut",$=c.$5a,U=I.frames||60,r=I.repeat||0,X=I.duration,T=I.delay||0,i=I.interval,F=c.$6a,A=I.onUpdate,C=I.onComplete,W=!1,O=function(){var G,N=X!=j?S.getCommonEasing(a)(Date.now()-c._startTime,m,l-m,X):S.getCommonEasing(a)($,m,l-m,U);A?A.call(e,N):B?"style"===B?e.s(Q,N):"attr"===B?e.a(Q,N):"field"===B&&(e[Q]=N):e["set"+(G=Q).charAt(0).toUpperCase()+G.slice(1)](N),W=!0},Z=function(){c._startTime==j&&(c._startTime=Date.now());var G=e._pauseTime;G!=j&&(c._startTime+=Date.now()-G),R==E.length-1&&delete e._pauseTime,i!=j?c.$7a>=i?(c.$7a=0,O()):c.$7a+=isNaN(h)?16.6666:h:O()};if(!T||c.$8a>=T?Z():c.$8a+=isNaN(h)?16.6666:h,W)if(X!=j){if(Date.now()-c._startTime>X)if(!0===r)c._startTime=Date.now();else if(c._startTime=Date.now(),r<=(F=c.$6a=F+1))if(C&&C.call(e),I.next)_[R]=j,E[R]=I.next;else{_[R]=j;for(var n=!(E[R]=j),D=0;D<E.length;D++)null!=E[D]&&(n=!1);n&&(e.setAnimation(j),e._animationstatus=j,e._animationprocess=j,e._pauseTime=j)}}else if($=c.$5a=$+1,U<$)if(!0===r)$=c.$5a=0;else if($=c.$5a=0,r<=(F=c.$6a=F+1))if(C&&C.call(e),I.next)_[R]=j,E[R]=I.next;else{_[R]=j;for(n=!(E[R]=j),D=0;D<E.length;D++)null!=E[D]&&(n=!1);n&&(e.setAnimation(j),e._animationstatus=j,e._animationprocess=j)}}}),"animationFrame"===h&&P.$1a!=j&&(P.$1a=E(N))},P.$1a="animationFrame"===G?E(N):R(N,G))},_.disableAnimation=function(){"animationFrame"!==this.getAnimationInterval()&&clearInterval(this.$1a),delete this.$1a},{Linear:function(G,N,e,_){return e*G/_+N},Quad:{easeIn:function(G,N,e,_){return e*(G/=_)*G+N},easeOut:function(G,N,e,_){return-e*(G/=_)*(G-2)+N},easeInOut:function(G,N,e,_){return(G/=_/2)<1?e/2*G*G+N:-e/2*(--G*(G-2)-1)+N}},Cubic:{easeIn:function(G,N,e,_){return e*(G/=_)*G*G+N},easeOut:function(G,N,e,_){return e*((G=G/_-1)*G*G+1)+N},easeInOut:function(G,N,e,_){return(G/=_/2)<1?e/2*G*G*G+N:e/2*((G-=2)*G*G+2)+N}},Quart:{easeIn:function(G,N,e,_){return e*(G/=_)*G*G*G+N},easeOut:function(G,N,e,_){return-e*((G=G/_-1)*G*G*G-1)+N},easeInOut:function(G,N,e,_){return(G/=_/2)<1?e/2*G*G*G*G+N:-e/2*((G-=2)*G*G*G-2)+N}},Quint:{easeIn:function(G,N,e,_){return e*(G/=_)*G*G*G*G+N},easeOut:function(G,N,e,_){return e*((G=G/_-1)*G*G*G*G+1)+N},easeInOut:function(G,N,e,_){return(G/=_/2)<1?e/2*G*G*G*G*G+N:e/2*((G-=2)*G*G*G*G+2)+N}},Sine:{easeIn:function(G,N,e,_){return-e*Math.cos(G/_*(Math.PI/2))+e+N},easeOut:function(G,N,e,_){return e*Math.sin(G/_*(Math.PI/2))+N},easeInOut:function(G,N,e,_){return-e/2*(Math.cos(Math.PI*G/_)-1)+N}},Expo:{easeIn:function(G,N,e,_){return 0==G?N:e*Math.pow(2,10*(G/_-1))+N},easeOut:function(G,N,e,_){return G==_?N+e:e*(1-Math.pow(2,-10*G/_))+N},easeInOut:function(G,N,e,_){return 0==G?N:G==_?N+e:(G/=_/2)<1?e/2*Math.pow(2,10*(G-1))+N:e/2*(2-Math.pow(2,-10*--G))+N}},Circ:{easeIn:function(G,N,e,_){return-e*(Math.sqrt(1-(G/=_)*G)-1)+N},easeOut:function(G,N,e,_){return e*Math.sqrt(1-(G=G/_-1)*G)+N},easeInOut:function(G,N,e,_){return(G/=_/2)<1?-e/2*(Math.sqrt(1-G*G)-1)+N:e/2*(Math.sqrt(1-(G-=2)*G)+1)+N}},Elastic:{easeIn:function(G,N,e,_,E,R){var c;return 0==G?N:1==(G/=_)?N+e:(void 0===R&&(R=.3*_),!E||E<Math.abs(e)?(c=R/4,E=e):c=R/(2*Math.PI)*Math.asin(e/E),-(E*Math.pow(2,10*--G)*Math.sin((G*_-c)*(2*Math.PI)/R))+N)},easeOut:function(G,N,e,_,E,R){var c;return 0==G?N:1==(G/=_)?N+e:(void 0===R&&(R=.3*_),c=!E||E<Math.abs(e)?(E=e,R/4):R/(2*Math.PI)*Math.asin(e/E),E*Math.pow(2,-10*G)*Math.sin((G*_-c)*(2*Math.PI)/R)+e+N)},easeInOut:function(G,N,e,_,E,R){var c;return 0==G?N:2==(G/=_/2)?N+e:(void 0===R&&(R=_*(.3*1.5)),c=!E||E<Math.abs(e)?(E=e,R/4):R/(2*Math.PI)*Math.asin(e/E),G<1?E*Math.pow(2,10*--G)*Math.sin((G*_-c)*(2*Math.PI)/R)*-.5+N:E*Math.pow(2,-10*--G)*Math.sin((G*_-c)*(2*Math.PI)/R)*.5+e+N)}},Back:{easeIn:function(G,N,e,_,E){return e*(G/=_)*G*(((E=void 0===E?1.70158:E)+1)*G-E)+N},easeOut:function(G,N,e,_,E){return e*((G=G/_-1)*G*(((E=void 0===E?1.70158:E)+1)*G+E)+1)+N},easeInOut:function(G,N,e,_,E){return void 0===E&&(E=1.70158),(G/=_/2)<1?e/2*(G*G*((1+(E*=1.525))*G-E))+N:e/2*((G-=2)*G*((1+(E*=1.525))*G+E)+2)+N}},Bounce:{easeIn:function(G,N,e,_){return e-c.Bounce.easeOut(_-G,0,e,_)+N},easeOut:function(G,N,e,_){return(G/=_)<1/2.75?e*(7.5625*G*G)+N:G<2/2.75?e*(7.5625*(G-=1.5/2.75)*G+.75)+N:G<2.5/2.75?e*(7.5625*(G-=2.25/2.75)*G+.9375)+N:e*(7.5625*(G-=2.625/2.75)*G+.984375)+N},easeInOut:function(G,N,e,_){return G<_/2?.5*c.Bounce.easeIn(2*G,0,e,_)+N:.5*c.Bounce.easeOut(2*G-_,0,e,_)+.5*e+N}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);