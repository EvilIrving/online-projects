!function(b){"use strict";function M(b,S){return r(b,S).width}function m(b,S){return r(b,S).height}function y(b,S){return f.getEdgeHostPosition(b,S,"source")}function F(b,S){return f.getEdgeHostPosition(b,S,"target")}function Z(b,S){var f=b.s(L),s=b.getEdgeGroup();if(s){var x=0;if(s.eachSiblingEdge(function(b){S.isVisible(b)&&b.s(L)==f&&x++}),1<x)return b.s(Q)*(x-1)/2}return 0}function d(f,s){var x=f.s(L),b=f.isLooped();if(!f.getEdgeGroup())return b?f.s(Q):0;var O,l=0,P=0,H=0;return f.getEdgeGroup().getSiblings().each(function(b){b.each(function(b){var S;b._40I===f._40I&&b.s(L)==x&&s.isVisible(b)&&(S=b.s(Q),H=(O?P+=H/2+S/2:O=b,S),b===f&&(l=P))})}),b?P-l+H:l-P/2}function X(b,S){return S=S.s("edge.corner.radius"),w.toRoundedCorner(b,S)}function l(b,x,O,S,f){if(S.sort(function(b,S){var f=b.getSourceAgent()===x?b.getTargetAgent():b.getSourceAgent(),s=S.getSourceAgent()===x?S.getTargetAgent():S.getSourceAgent(),f=f.p(),s=s.p();if(O===z||O===_){if(f.y>s.y)return 1;if(f.y<s.y)return-1}else{if(f.x>s.x)return 1;if(f.x<s.x)return-1}return w.sortFunc(b.getId(),S.getId())}),f){for(var s,l,P,H=b.getSourceAgent(),L=b.getTargetAgent(),r=0;r<S.size();r++){var u=S.get(r);u.getSourceAgent()===H&&u.getTargetAgent()===L||u.getTargetAgent()===H&&u.getSourceAgent()===L?(l=l||new j).add(u,0):(l?P=P||new j:s=s||new j).add(u)}S.clear(),s&&S.addAll(s),l&&S.addAll(l),P&&S.addAll(P)}var f=S.indexOf(b),p=S.size(),b=b.s(Q);return{side:O,index:f,size:p,offset:-b*(p-1)/2+b*f}}function u(S,b,f,s,x){var O=b.s(L);return l(b,f,s,f.getAgentEdges().toList(function(b){return S.isVisible(b)&&b.s(L)===O}),x)}function O(b,S){var b=b.getSourceAgent()===S?b.getTargetAgent():b.getSourceAgent(),S=S.p(),f=(b=b.p()).x-S.x,b=b.y-S.y;return 0<f&&D(b)<=f?_:f<0&&D(b)<=-f?z:0<b&&D(f)<=b?k:C}function o(S,b,f){var s=b.s(L),x=O(b,f);return l(b,f,x,f.getAgentEdges().toList(function(b){return S.isVisible(b)&&b.s(L)===s&&O(b,f)===x}))}function P(b,S){var f=b.getSourceAgent()===S,b=f?b.getTargetAgent():b.getSourceAgent(),S=S.p(),b=b.p();return f?S.y>b.y?C:k:S.x<b.x?_:z}function s(S,b,f){var s=b.s(L),x=P(b,f);return l(b,f,x,f.getAgentEdges().toList(function(b){return S.isVisible(b)&&b.s(L)===s&&P(b,f)===x}),x===_||x===k)}function H(b,S){var f=b.getSourceAgent()===S,b=f?b.getTargetAgent():b.getSourceAgent(),S=S.p(),b=b.p();return f?S.x<b.x?_:z:S.y>b.y?C:k}function B(S,b,f){var s=b.s(L),x=H(b,f);return l(b,f,x,f.getAgentEdges().toList(function(b){return S.isVisible(b)&&b.s(L)===s&&H(b,f)===x}),x===_||x===k)}function x(b,S,f){var s=b.getSourceAgent(),x=b.getTargetAgent(),O=s.getId()>x.getId(),l=O?x:s,s=O?s:x,x=l.p(),P=s.p(),H=f(S,b,l),f=f(S,b,s),L=(u=b.s(J))?0:M(S,l)/2,r=u?0:M(S,s)/2,l=u?0:m(S,l)/2,u=u?0:m(S,s)/2,S=H.offset,s=f.offset,H=H.side,f=f.side,p=new j;return H===C?(p.add({x:x.x+S,y:x.y-l}),p.add({x:x.x+S,y:P.y+s}),f===z?p.add({x:P.x-r,y:P.y+s}):p.add({x:P.x+r,y:P.y+s})):H===k?(p.add({x:x.x+S,y:x.y+l}),p.add({x:x.x+S,y:P.y+s}),f===z?p.add({x:P.x-r,y:P.y+s}):p.add({x:P.x+r,y:P.y+s})):H===z?(p.add({x:x.x-L,y:x.y+S}),p.add({x:P.x+s,y:x.y+S}),f===k?p.add({x:P.x+s,y:P.y+u}):p.add({x:P.x+s,y:P.y-u})):H===_&&(p.add({x:x.x+L,y:x.y+S}),p.add({x:P.x+s,y:x.y+S}),f===k?p.add({x:P.x+s,y:P.y+u}):p.add({x:P.x+s,y:P.y-u})),O&&p.reverse(),X(p,b)}var R=b.ht,b=Math,p=b.max,G=b.min,D=b.abs,h=b.atan2,c=(b.cos,b.sin,b.ceil),w=R.Default,f=w.getInternal(),j=R.List,a=f.Mat,r=f.getNodeRect,t=f.intersectionLineRect,$=w.getDistance,b=w.setEdgeType,z="left",_="right",C="top",k="bottom",L="edge.type",Q="edge.gap",J="edge.center",q="edge.extend";f.addMethod(R.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),b("boundary",function(b,S,f,s){s||(S=-S);var s=y(f,b),x=F(f,b),O=r(f,b._40I),f=r(f,b._41I),b=new a(h(x.y-s.y,x.x-s.x)),l=$(s,x),P=s.x,H=s.y,L=b.tf(0,S),s={x:L.x+P,y:L.y+H},x={x:(L=b.tf(l,S)).x+P,y:L.y+H};return(L=t(s,x,O))&&(s={x:L[0],y:L[1]}),(L=t(s,x,f))&&(x={x:L[0],y:L[1]}),{points:new j([s,x])}}),b("ripple",function(b,S,f,s){s||(S=-S);var x=y(f,b),f=F(f,b),O=$(x,f),l=G(b.s("edge.offset"),O/2),P=b.s("edge.ripple.size"),H=b.s("edge.ripple.length"),L=b.s("edge.ripple.both"),r=b.s(J),u=b.s("edge.ripple.elevation"),p=new j,w=b.s("edge.ripple.straight")?null:new j,t=new a(h(f.y-x.y,f.x-x.x)),d=(s||(u=-u),(O-=2*l)/(P=0<H?c(O/H):P));w&&w.add(1);for(var Q=0;Q<P;Q++)w&&w.add(3),0===Q?p.add({x:l+d*Q,y:r?0:S}):p.add({x:l+d*Q,y:S}),p.add({x:l+d*Q+d/2,y:u+S}),L&&(u=-u);for(p.add({x:l+O,y:r?0:S}),Q=0;Q<p.size();Q++){var M=t.tf(p.get(Q));M.x+=x.x,M.y+=x.y,p.set(Q,M)}return{points:p,segments:w}}),b("h.v",function(b,S,f){S=d(b,f);var s=new j,x=b.s(J),O=y(f,b),l=O.x,O=O.y,P=F(f,b),H=P.x,P=P.y,L=b._40I instanceof R.Edge,r=b._41I instanceof R.Edge,u=0,p=0,w=H-l,t=P-O;return x||(u=L?0:M(f,b._40I)/2,p=r?0:m(f,b._41I)/2),0<=w&&t<=0?(s.add({x:l+u,y:O+S}),s.add({x:H+S,y:O+S}),s.add({x:H+S,y:P+p})):w<=0&&0<=t?(s.add({x:l-u,y:O+S}),s.add({x:H+S,y:O+S}),s.add({x:H+S,y:P-p})):0<=w&&0<=t?(s.add({x:l+u,y:O+S}),s.add({x:H-S,y:O+S}),s.add({x:H-S,y:P-p})):(s.add({x:l-u,y:O+S}),s.add({x:H-S,y:O+S}),s.add({x:H-S,y:P+p})),X(s,b)}),b("v.h",function(b,S,f){S=d(b,f);var s=new j,x=b.s(J),O=y(f,b),l=O.x,O=O.y,P=F(f,b),H=P.x,P=P.y,L=b._40I instanceof R.Edge,r=b._41I instanceof R.Edge,u=0,p=0,w=H-l,t=P-O;return x||(u=r?0:M(f,b._41I)/2,p=L?0:m(f,b._40I)/2),0<=w&&t<=0?(s.add({x:l+S,y:O-p}),s.add({x:l+S,y:P+S}),s.add({x:H-u,y:P+S})):w<=0&&0<=t?(s.add({x:l+S,y:O+p}),s.add({x:l+S,y:P+S}),s.add({x:H+u,y:P+S})):0<=w&&0<=t?(s.add({x:l-S,y:O+p}),s.add({x:l-S,y:P+S}),s.add({x:H-u,y:P+S})):(s.add({x:l-S,y:O-p}),s.add({x:l-S,y:P+S}),s.add({x:H+u,y:P+S})),X(s,b)}),b("ortho",function(b,S,f){var s=new j,x=b.s(J),O=b.s("edge.ortho"),l=b._40I,P=b._41I,H=y(f,b),L=H.x,H=H.y,r=F(f,b),u=r.x,r=r.y,p=u-L,w=r-H,t=l instanceof R.Edge,d=P instanceof R.Edge,Q=x||t?0:M(f,l)/2,t=x||t?0:m(f,l)/2,l=x||d?0:M(f,P)/2,x=x||d?0:m(f,P)/2,d=(p-(Q+l)*(0<p?1:-1))*O,f=(w-(t+x)*(0<w?1:-1))*O;return D(p)<D(w)?0<=p&&w<=0?(s.add({x:L+S,y:H-t}),s.add({x:L+S,y:H+f+S-t}),s.add({x:u+S,y:H+f+S-t}),s.add({x:u+S,y:r+x})):p<=0&&0<=w?(s.add({x:L+S,y:H+t}),s.add({x:L+S,y:H+f+S+t}),s.add({x:u+S,y:H+f+S+t}),s.add({x:u+S,y:r-x})):0<=p&&0<=w?(s.add({x:L+S,y:H+t}),s.add({x:L+S,y:H+f-S+t}),s.add({x:u+S,y:H+f-S+t}),s.add({x:u+S,y:r-x})):(s.add({x:L+S,y:H-t}),s.add({x:L+S,y:H+f-S-t}),s.add({x:u+S,y:H+f-S-t}),s.add({x:u+S,y:r+x})):0<=p&&w<=0?(s.add({x:L+Q,y:H+S}),s.add({x:L+d+S+Q,y:H+S}),s.add({x:L+d+S+Q,y:r+S}),s.add({x:u-l,y:r+S})):p<=0&&0<=w?(s.add({x:L-Q,y:H+S}),s.add({x:L+d+S-Q,y:H+S}),s.add({x:L+d+S-Q,y:r+S}),s.add({x:u+l,y:r+S})):0<=p&&0<=w?(s.add({x:L+Q,y:H+S}),s.add({x:L+d-S+Q,y:H+S}),s.add({x:L+d-S+Q,y:r+S}),s.add({x:u-l,y:r+S})):(s.add({x:L-Q,y:H+S}),s.add({x:L+d-S-Q,y:H+S}),s.add({x:L+d-S-Q,y:r+S}),s.add({x:u+l,y:r+S})),X(s,b)}),b("flex",function(b,S,f){var s=new j,x=b.s("edge.flex")+Z(b,f),O=b.s(J),l=b._40I,P=b._41I,H=y(f,b),L=H.x,H=H.y,r=F(f,b),u=r.x,r=r.y,p=l instanceof R.Edge,w=P instanceof R.Edge,t=u-L,d=r-H,Q=O||p?0:M(f,l)/2,p=O||p?0:m(f,l)/2,l=O||w?0:M(f,P)/2,O=O||w?0:m(f,P)/2,w=0<t?x:-x,f=0<d?x:-x;return D(t)<D(d)?0<=t&&d<=0?(s.add({x:L+S,y:H-p}),s.add({x:L+S,y:H+f+S-p}),s.add({x:u+S,y:r-f+S+O}),s.add({x:u+S,y:r+O})):t<=0&&0<=d?(s.add({x:L+S,y:H+p}),s.add({x:L+S,y:H+f+S+p}),s.add({x:u+S,y:r-f+S-O}),s.add({x:u+S,y:r-O})):0<=t&&0<=d?(s.add({x:L+S,y:H+p}),s.add({x:L+S,y:H+f-S+p}),s.add({x:u+S,y:r-f-S-O}),s.add({x:u+S,y:r-O})):(s.add({x:L+S,y:H-p}),s.add({x:L+S,y:H+f-S-p}),s.add({x:u+S,y:r-f-S+O}),s.add({x:u+S,y:r+O})):0<=t&&d<=0?(s.add({x:L+Q,y:H+S}),s.add({x:L+w+S+Q,y:H+S}),s.add({x:u-w+S-l,y:r+S}),s.add({x:u-l,y:r+S})):t<=0&&0<=d?(s.add({x:L-Q,y:H+S}),s.add({x:L+w+S-Q,y:H+S}),s.add({x:u-w+S+l,y:r+S}),s.add({x:u+l,y:r+S})):0<=t&&0<=d?(s.add({x:L+Q,y:H+S}),s.add({x:L+w-S+Q,y:H+S}),s.add({x:u-w-S-l,y:r+S}),s.add({x:u-l,y:r+S})):(s.add({x:L-Q,y:H+S}),s.add({x:L+w-S-Q,y:H+S}),s.add({x:u-w-S+l,y:r+S}),s.add({x:u+l,y:r+S})),X(s,b)}),b("extend.east",function(b,S,f){var s=new j,x=b.s(q)+Z(b,f),O=b.s(J),l=y(f,b),P=b._40I instanceof R.Edge,H=b._41I instanceof R.Edge,P=l.x+(O||P?0:M(f,b._40I)/2),l=l.y,L=F(f,b),O=L.x+(O||H?0:M(f,b._41I)/2),H=L.y,f=p(P,O)+x;return H<l?(s.add({x:P,y:l+S}),s.add({x:f+S,y:l+S}),s.add({x:f+S,y:H-S}),s.add({x:O,y:H-S})):(s.add({x:P,y:l-S}),s.add({x:f+S,y:l-S}),s.add({x:f+S,y:H+S}),s.add({x:O,y:H+S})),X(s,b)}),b("extend.west",function(b,S,f){var s=new j,x=b.s(q)+Z(b,f),O=b.s(J),l=b._40I instanceof R.Edge,P=b._41I instanceof R.Edge,H=y(f,b),l=H.x-(O||l?0:M(f,b._40I)/2),H=H.y,L=F(f,b),O=L.x-(O||P?0:M(f,b._41I)/2),P=L.y,f=G(l,O)-x;return P<H?(s.add({x:l,y:H+S}),s.add({x:f-S,y:H+S}),s.add({x:f-S,y:P-S}),s.add({x:O,y:P-S})):(s.add({x:l,y:H-S}),s.add({x:f-S,y:H-S}),s.add({x:f-S,y:P+S}),s.add({x:O,y:P+S})),X(s,b)}),b("extend.north",function(b,S,f){var s=new j,x=b.s(q)+Z(b,f),O=b.s(J),l=b._40I instanceof R.Edge,P=b._41I instanceof R.Edge,H=y(f,b),L=H.x,H=H.y-(O||l?0:m(f,b._40I)/2),l=F(f,b),r=l.x,l=l.y-(O||P?0:m(f,b._41I)/2),O=G(H,l)-x;return r<L?(s.add({y:H,x:L+S}),s.add({y:O-S,x:L+S}),s.add({y:O-S,x:r-S}),s.add({y:l,x:r-S})):(s.add({y:H,x:L-S}),s.add({y:O-S,x:L-S}),s.add({y:O-S,x:r+S}),s.add({y:l,x:r+S})),X(s,b)}),b("extend.south",function(b,S,f){var s=new j,x=b.s(q)+Z(b,f),O=b.s(J),l=b._40I instanceof R.Edge,P=b._41I instanceof R.Edge,H=y(f,b),L=H.x,H=H.y+(O||l?0:m(f,b._40I)/2),l=F(f,b),r=l.x,l=l.y+(O||P?0:m(f,b._41I)/2),O=p(H,l)+x;return r<L?(s.add({y:H,x:L+S}),s.add({y:O+S,x:L+S}),s.add({y:O+S,x:r-S}),s.add({y:l,x:r-S})):(s.add({y:H,x:L-S}),s.add({y:O+S,x:L-S}),s.add({y:O+S,x:r+S}),s.add({y:l,x:r+S})),X(s,b)});b("ortho2",function(b,S,f,s){var x,O,l=b.s(J),P=b.s("edge.ortho"),H=b.getSourceAgent(),L=b.getTargetAgent(),r=H.getId()>L.getId(),u=r?L:H,H=r?H:L,L=u.p(),p=H.p(),w=o(f,b,u),t=o(f,b,H),d=l?0:M(f,u)/2,u=l?0:m(f,u)/2,Q=l?0:M(f,H)/2,l=l?0:m(f,H)/2,f=new j,H=w.offset,t=t.offset,w=w.side;return w===_?(x=p.y>L.y?-H:H,O=L.x+d+(p.x-Q-L.x-d)*P,f.add({x:L.x+d,y:L.y+H}),f.add({x:O+x,y:L.y+H}),f.add({x:O+x,y:p.y+t}),f.add({x:p.x-Q,y:p.y+t})):w===z?(x=p.y>L.y?-H:H,O=L.x-d-(L.x-d-p.x-Q)*P,f.add({x:L.x-d,y:L.y+H}),f.add({x:O-x,y:L.y+H}),f.add({x:O-x,y:p.y+t}),f.add({x:p.x+Q,y:p.y+t})):w===k?(x=p.x>L.x?-H:H,O=L.y+u+(p.y-l-L.y-u)*P,f.add({x:L.x+H,y:L.y+u}),f.add({x:L.x+H,y:O+x}),f.add({x:p.x+t,y:O+x}),f.add({x:p.x+t,y:p.y-l})):w===C&&(x=p.x>L.x?-H:H,O=L.y-u-(L.y-u-p.y-l)*P,f.add({x:L.x+H,y:L.y-u}),f.add({x:L.x+H,y:O-x}),f.add({x:p.x+t,y:O-x}),f.add({x:p.x+t,y:p.y+l})),r&&f.reverse(),X(f,b)},!0),b("flex2",function(b,S,f,s){var x,O=b.getSourceAgent(),l=b.getTargetAgent(),P=O.getId()>l.getId(),H=P?l:O,O=P?O:l,l=H.p(),L=O.p(),r=o(f,b,H),u=o(f,b,O),p=b.s(J),w=b.s("edge.flex")+(r.size-1)/2*b.s(Q),t=p?0:M(f,H)/2,H=p?0:m(f,H)/2,d=p?0:M(f,O)/2,p=p?0:m(f,O)/2,f=new j,O=r.offset,u=u.offset,r=r.side;return r===_?(x=L.y>l.y?-O:O,f.add({x:l.x+t,y:l.y+O}),f.add({x:l.x+t+w+x,y:l.y+O}),f.add({x:L.x-d-w+x,y:L.y+u}),f.add({x:L.x-d,y:L.y+u})):r===z?(x=L.y>l.y?-O:O,f.add({x:l.x-t,y:l.y+O}),f.add({x:l.x-t-w-x,y:l.y+O}),f.add({x:L.x+d+w-x,y:L.y+u}),f.add({x:L.x+d,y:L.y+u})):r===k?(x=L.x>l.x?-O:O,f.add({x:l.x+O,y:l.y+H}),f.add({x:l.x+O,y:l.y+H+w+x}),f.add({x:L.x+u,y:L.y-p-w+x}),f.add({x:L.x+u,y:L.y-p})):r===C&&(x=L.x>l.x?-O:O,f.add({x:l.x+O,y:l.y-H}),f.add({x:l.x+O,y:l.y-H-w-x}),f.add({x:L.x+u,y:L.y+p+w-x}),f.add({x:L.x+u,y:L.y+p})),P&&f.reverse(),X(f,b)},!0),b("extend.north2",function(b,S,f){var s=b.getSourceAgent(),x=b.getTargetAgent(),O=s.getId()>x.getId(),l=O?x:s,s=O?s:x,x=l.p(),P=s.p(),H=u(f,b,l,C),L=u(f,b,s,C,!0),r=b.s(J),l=r?0:m(f,l)/2,r=r?0:m(f,s)/2,f=H.offset,s=L.offset,L=b.s(q)+(H.size-1)/2*b.s(Q),H=G(x.y-l,P.y-r)-L+(x.x<P.x?f:-f),L=new j;return L.add({x:x.x+f,y:x.y-l}),L.add({x:x.x+f,y:H}),L.add({x:P.x+s,y:H}),L.add({x:P.x+s,y:P.y-r}),O&&L.reverse(),X(L,b)},!0),b("extend.south2",function(b,S,f){var s=b.getSourceAgent(),x=b.getTargetAgent(),O=s.getId()>x.getId(),l=O?x:s,s=O?s:x,x=l.p(),P=s.p(),H=u(f,b,l,k),L=u(f,b,s,k,!0),r=b.s(J),l=r?0:m(f,l)/2,r=r?0:m(f,s)/2,f=H.offset,s=L.offset,L=b.s(q)+(H.size-1)/2*b.s(Q),H=p(x.y+l,P.y+r)+L+(x.x>P.x?f:-f),L=new j;return L.add({x:x.x+f,y:x.y+l}),L.add({x:x.x+f,y:H}),L.add({x:P.x+s,y:H}),L.add({x:P.x+s,y:P.y+r}),O&&L.reverse(),X(L,b)},!0),b("extend.west2",function(b,S,f){var s=b.getSourceAgent(),x=b.getTargetAgent(),O=s.getId()>x.getId(),l=O?x:s,s=O?s:x,x=l.p(),P=s.p(),H=u(f,b,l,C),L=u(f,b,s,C,!0),r=b.s(J),l=r?0:M(f,l)/2,r=r?0:M(f,s)/2,f=H.offset,s=L.offset,L=b.s(q)+(H.size-1)/2*b.s(Q),H=G(x.x-l,P.x-r)-L+(x.y<P.y?f:-f),L=new j;return L.add({x:x.x-l,y:x.y+f}),L.add({x:H,y:x.y+f}),L.add({x:H,y:P.y+s}),L.add({x:P.x-r,y:P.y+s}),O&&L.reverse(),X(L,b)},!0),b("extend.east2",function(b,S,f){var s=b.getSourceAgent(),x=b.getTargetAgent(),O=s.getId()>x.getId(),l=O?x:s,s=O?s:x,x=l.p(),P=s.p(),H=u(f,b,l,C),L=u(f,b,s,C,!0),r=b.s(J),l=r?0:M(f,l)/2,r=r?0:M(f,s)/2,f=H.offset,s=L.offset,L=b.s(q)+(H.size-1)/2*b.s(Q),H=p(x.x+l,P.x+r)+L+(x.y>P.y?f:-f),L=new j;return L.add({x:x.x+l,y:x.y+f}),L.add({x:H,y:x.y+f}),L.add({x:H,y:P.y+s}),L.add({x:P.x+r,y:P.y+s}),O&&L.reverse(),X(L,b)},!0),b("v.h2",function(b,S,f){return x(b,f,s)},!0),b("h.v2",function(b,S,f){return x(b,f,B)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);