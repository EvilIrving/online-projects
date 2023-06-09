!function(e){"use strict";function k(e,q){for(var r=[],_=e.length,I=0;I<_;I++)for(var P=e[I],A=(P=P._as?P._as:P)[0],S=1;S<P.length;S++)r.push([A,P[S]]),A=P[S];for(var T=[],I=0;I<r.length;I++){var $=p(r[I][0],r[I][1],q);T.push($)}return{distance:T,segments:r}}function I(e,q,r){if(e){for(var _,e=k(e,q),I=e.distance,P=e.segments,A=1/0,S=null,T=0,$=I.length;T<$;T++){var D=I[T];D.z<A&&(_=T,A=D.z,S=D)}if(S.z<(r=null==r?.1:r)){for(var C=0,a=0;a<=_;a++)C+=U.getDistance(P[a][0],a<_?P[a][1]:S);return C}}}function _(e,q){var r,_;if(e)return e=k(e,q).distance,r=1/0,_=null,e.forEach(function(e){e.z<r&&(r=e.z,_=e)}),_}function P(e,q,r){if(!e)return r;if(0===q)return Q=e[0][0],a=e[0][1],r+Math.atan2(a.y-Q.y,a.x-Q.x);if(100===q)return Q=(e=e[e.length-1])[e.length-2],a=e[e.length-1],r+Math.atan2(a.y-Q.y,a.x-Q.x);for(var _=0,I=[],P=e.length,A=0;A<P;A++){var S=e[A],S=l(S);_+=S,I.push(S)}for(var T=_*q/100,$=x(T,I),D=0,C=0;C<$;C++)D+=I[C];for(var a=g(e[$],T-=D),k=e[$],U=0,v=0,h=0;h<k.length-1;h++){var H=k[h],s=k[h+1],B=s.x-H.x,s=s.y-H.y;if(T<(U+=Math.sqrt(B*B+s*s))){v=h;break}}var Q=k[v];return r+Math.atan2(a.y-Q.y,a.x-Q.x)}function r(e){var q=0;if(e)if(Array.isArray(e[0]))for(var r=e.length,_=0;_<r;_++){var I=e[_];q+=l(I)}else q=l(e);return q}function A(e){var q=e._data,r=C(e);if(r){q.s("flow.reverse")&&(r.reverse(),r.forEach(function(e){e.reverse()}));for(var _,I,P=0,A=[],S=r.length,T=0;T<S;T++){var $=r[T],$=l($);P+=$,A.push($)}q[N]=A,q[z]=P,q[V]=r,q instanceof D.Edge&&(_=(I=U.unionPoint(r)).x+I.width/2,I=I.y+I.height/2,q.$10e={x:_,y:I}),L(e,!0)}}function u(e){var q,r=e.data,_=this.dm();r&&"add"===e.kind&&(q=_.$3e)&&r.s(S)&&q.indexOf(r)<0&&q.push(r),"clear"===e.kind&&(_.$3e=[])}function j(e){var q=e.property,r=e.data,e=e.newValue,_=this.dm().$3e;if(_&&"s:flow"===q)if(e)_.indexOf(r)<0&&_.push(r);else for(var I=_.length,P=0;P<I;P++)if(_[P]===r){_.splice(P,1);break}}function d(H){var e,s=this,B=s._data,Q=B[z],b=B[N],l=B[V],q=B.s(E),r=s[O],_=B.s(f),I=B.s(J),P=B.s(o),A=B.s(y),S=B.s(Z),w=B.s(R),T=(S-A)/(P-1),$=(_-I)/(P-1),u=B.getRotation?B.getRotation():0,j=B.getPosition?B.p():B.$10e,d=[],m=[];if(r!=h){if(1===P)d.push(_);else if(2===P)d.push(_),d.push(I);else{if(!(2<P))return;d.push(_);for(var D=P-2;0<D;D--)d.push(I+$*D);d.push(I)}if(1===P)m.push(S);else if(2===P)m.push(S),m.push(A);else{if(!(2<P))return;m.push(S);for(D=P-2;0<D;D--)m.push(A+T*D);m.push(A)}var t=0,C=0;d.forEach(function(e){t<P-1&&(C+=B.getFlowElementSpace(e)),t++}),e=(Q-q*(C+=(_+I)/2)+C)/q,H.save();for(D=0;D<q;D++){var X=r,p=0,a=s._overCount,n=0;B.s("flow.autoreverse")&&a&&q-(D+1)<a||(X-=D*(e+C),t=0,d.forEach(function(e){var q,r,_,I=X-p;if(0<=I&&I<Q){for(var P=x(I,b),A=n=0;A<P;A++)n+=b[A];I-=n;var S=g(l[P],I),T=u;if(w){for(var $=l[P],D=0,C=0,a=0;a<$.length-1;a++){var k=$[a],U=$[a+1],v=U.x-k.x,U=U.y-k.y;if(I<(D+=Math.sqrt(v*v+U*U))){C=a;break}}var h=$[C];T+=Math.atan2(S.y-h.y,S.x-h.x)}u&&(h=j,q=S.x-j.x,r=S.y-j.y,_=u,K.set(q,r).rotateAround(null,_),S=h?{x:h.x+K.x,y:h.y+K.y}:{x:K.x,y:K.y}),s.$5e(H,S,e,m[t],T)}p+=B.getFlowElementSpace(d[t]),t++}))}H.restore()}}function m(){var e,q=this,r=q._data,_=r.s(f),I=!1,P=h;return q._6I||(I=!0),P=(r instanceof D.Edge?c:W).call(q),r.s(S)&&I&&(e=r.s(Z),0<(_=r.s(b)&&_<e?e:_)&&U.grow(P,Math.ceil(_/2)),A(q)),!r.s(S)&&I&&(r[N]=r[z]=r[V]=q[O]=h),P}function t(e){this.__flowBatchGroup={}}function X(q){var e=this.__flowBatchGroup;if(e){for(var r in q.save(),e)q.fillStyle=r,q.beginPath(),e[r].forEach(function(e){q.moveTo(e[0],e[1]),q.arc(e[0],e[1],e[2],0,2*Math.PI,!0)}),q.fill();q.restore()}}var D=e.ht,U=D.Default,v=U.getInternal(),e=v.ui(),h=null,N="__segmentLengths",z="__lineTotalLength",V="__linePoints",O="__distance0",E="flow.count",s="flow.step",f="flow.element.max",o="flow.element.count",J="flow.element.min",q="flow.element.space",R="flow.element.autorotate",H="flow.element.background",Z="flow.element.shadow.max",y="flow.element.shadow.min",B="flow.element.shadow.begincolor",Q="flow.element.shadow.endcolor",b="flow.element.shadow.visible",S="flow",T=D.Math.Vector2,K=new T,T=(new T,new T,D.List,D.Default._edgeProtectMethod),C=T.getStraightLinePoints,p=function(e,q,r){var _=e.x,I=e.y,P=q.x,A=q.y,S=r.x,r=r.y,P=P-_,A=A-I,T=Math.sqrt(P*P+A*A),$=P/T,T=A/T,D=(-_+S)*$+(-I+r)*T,_={x:_+D*$,y:I+D*T};return _.x>=Math.min(e.x,q.x)&&_.x<=Math.max(e.x,q.x)&&_.y>=Math.min(e.y,q.y)&&_.y<=Math.max(e.y,q.y)||(_.x=(Math.abs(_.x-e.x)<Math.abs(_.x-q.x)?e:q).x,_.y=(Math.abs(_.y-e.y)<Math.abs(_.y-q.y)?e:q).y),P=S-_.x,A=r-_.y,_.z=Math.sqrt(P*P+A*A),_},l=T.calculateLineLength,x=T.calcSegmentIndexByDistance,g=T.calculatePointAlongLine,n=T.getPercentPosition,L=function(e,q){var r,_=e._data,I=_[z],P=_.s(E),A=_.s(s),S=_[N],T=_.s(f),$=_.s(J),D=_.s(o),C=(T-$)/(D-1),a=[];if(S){if(1===D)a.push(T);else if(2===D)a.push(T),a.push($);else{if(!(2<D))return;a.push(T);for(var k=D-2;0<k;k--)a.push($+C*k);a.push($)}var U=0,v=0,h=(a.forEach(function(e){U<D-1&&(v+=_.getFlowElementSpace(e)),U++}),r=(I-P*(v+=(T+$)/2)+v)/P,e[O]);for(null==h&&(h=0),q||(h+=A);I+v<h;){var H=e._overCount;H?H++:H=1,P<=H&&(H=null),e._overCount=H,!_.s("flow.autoreverse")||H?h-=r+v:(h=0,_.s("flow.reverse",!_.s("flow.reverse")))}e[O]=h}},T="prototype",$=D.graph.GraphView[T],G=D.Data[T],Y=e.DataUI[T],a=e.ShapeUI[T],e=e.EdgeUI[T],T=D.DataModel[T],w=D.Style,i=(w[f]==h&&(w[f]=7),w[J]==h&&(w[J]=0),w[E]==h&&(w[E]=1),w[s]==h&&(w[s]=3),w[o]==h&&(w[o]=10),w[q]==h&&(w[q]=3.5),w[R]==h&&(w[R]=!1),w[H]==h&&(w[H]="rgba(255, 255, 114, 0.4)"),w[B]==h&&(w[B]="rgba(255, 255, 0, 0.3)"),w[Q]==h&&(w[Q]="rgba(255, 255, 0, 0)"),w[b]==h&&(w[b]=1),w[Z]==h&&(w[Z]=22),w[y]==h&&(w[y]=4),$.calculatePointLength=function(e,q,r){e=this.getDataUI(e),e=C(e);return I(e,q,r)},U.calculatePointLength=function(e,q,r,_){e=C(h,e,q);return I(e,r,_)},U.calculateClosestPointOnLine=p,$.calculateClosestPoint=function(e,q){e=this.getDataUI(e),e=C(e);return _(e,q)},U.calculateClosestPoint=function(e,q,r){e=C(h,e,q);return _(e,r)},$.getPercentAngle=function(e,q){var r=this.getDataUI(e),r=C(r);e.getRotation&&e.getRotation();return P(r,q,e.getRotation?e.getRotation():0)},U.getPercentAngle=function(e,q,r){e=C(h,e,q);return P(e,r,0)},$.calculateLength=function(e){e=this.getDataUI(e),e=C(e);return r(e)},U.calculateLength=function(e,q){e=C(h,e,q);return r(e)},$.getPercentPosition=function(e,q){e=this.getDataUI(e),e=C(e);return n(e,q)},U.getPercentPositionOnPoints=function(e,q,r){e=C(h,e,q);return n(e,r)},$.setDataModel),F=($.setDataModel=function(e){var q,r=this,_=r._dataModel;_!==e&&(_&&(_.umm(u,r),_.umd(j,r),_.$3e=[]),e.mm(u,r),e.md(j,r),q=e.$3e=[],e.each(function(e){e.s(S)&&q.indexOf(e)<0&&q.push(e)}),i.call(r,e))},G.getFlowElementSpace=function(e){return this.s(q)},e._80o),M=(e._80o=function(e){F.call(this,e);var q=this._data,r=this.gv;q.s(S)&&r.$7e!=h&&d.call(this,e)},a._80o),c=(a._80o=function(e){M.call(this,e);var q=this._data,r=this.gv;q.s(S)&&r.$7e!=h&&d.call(this,e)},e._79o),W=a._79o,es=(a._79o=m,e._79o=m,Y.$5e=function(e,q,r,_,I){var P,A=this._data,S=this.gv,T=A.s(H),$=A.s(B),D=A.s(Q),C=A.s(b),a=S.$8e,k=A.s("flow.element.image");a==h&&(a=S.$8e={}),e.beginPath(),k!=h?(k=U.getImage(k),P=r/2,e.translate(q.x,q.y),e.rotate(I),e.translate(-q.x,-q.y),U.drawImage(e,k,q.x-P,q.y-P,r,r,A),e.translate(q.x,q.y),e.rotate(-I),e.translate(-q.x,-q.y)):S.__flowBatch?(k=(k=S.__flowBatchGroup)||(S.__flowBatchGroup={}),I=[q.x,q.y,r/2],k[T]?k[T].push(I):k[T]=[I]):(e.fillStyle=T,e.arc(q.x,q.y,r/2,0,2*Math.PI,!0),e.fill()),C&&((k=a[S="22_"+$+"_"+D])==h&&(I=document.createElement("canvas"),v.setCanvas(I,22,22),T=I.getContext("2d"),v.translateAndScale(T,0,0,1),T.beginPath(),(r=T.createRadialGradient(11,11,0,11,11,11)).addColorStop(0,$),r.addColorStop(1,D),T.fillStyle=r,T.arc(11,11,11,0,2*Math.PI,!0),T.fill(),k=a[S]=I),U.drawImage(e,k,q.x-(P=_/2),q.y-P,_,_,A))},$.$9e=function(){var q=this,e=q.dm().$3e;q._24I;e.forEach(function(e){q._24I[e._id]=e}),q.iv()},T.prepareRemove);T.prepareRemove=function(e){es.call(this,e);var q=e._dataModel.$3e;if(q)for(var r=q.length,_=0;_<r;_++)if(q[_]===e){q.splice(_,1);break}},$.setFlowInterval=function(e){var q=this,r=q.$11e;q.$11e=e,q.fp("flowInterval",r,e),q.$7e!=h&&(clearInterval(q.$7e),delete q.$7e,q.enableFlow(e))},$.getFlowInterval=function(){return this.$11e},$.enableFlow=function(e){var q=this,r=q.dm(),_=r.$3e;q.$7e==h&&(_.forEach(function(e){e=q.getDataUI(e);A(e)}),q.$7e=setInterval(function(){r.$3e.forEach(function(e){L(q.getDataUI(e))}),q.$9e()},e||q.$11e||50))},$.disableFlow=function(){clearInterval(this.$7e),delete this.$7e,this.dm().$3e&&this.$9e()};$.setFlowBatch=function(e){var q=this;!!q.__flowBatch!=!!e&&((q.__flowBatch=e)?(q.addBottomPainter(t),q.addTopPainter(X)):(q.removeBottomPainter(t),q.removeTopPainter(X)))}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);