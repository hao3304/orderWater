var user = "jjl";

fis.hook('module', {
    mode: 'mod'
    /*paths : {
     'main': 'components/component/main'
     }*/
});

//components���������js��Դ�����������Դ
fis.match("components/**", {
    isMod: true,
    release: '/static/duliang/weixin/apps/'+user+'/static/$0'
});

//docĿ¼������
fis.match("doc/**", {
    release: false
});

fis.match("/component_modules/*.js", {
    isMod: true,
    useMap: true,
    release: '/static/duliang/weixin/apps/'+user+'/static/$0'
});

//component�����Դid֧�ּ�д
fis.match(/^\/components\/component\/(.*)$/i, {
    id : '$1'
});

//page���ҳ�淢������Ŀ¼
fis.match("components/page/(*.html)",{
    release: '/static/duliang/weixin/apps/'+user+'/$1',
    useCache : false
});

//sass�ı���
fis.match('**/*.scss', {
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('sass', {
        //fis-parser-sass option
    })
});

//���·��������ͷ��ȶ�̬ͼƬ��ַ����hash
fis.match(/static\/images\/.*\.(jpeg|jpg|png)$/,{
    useHash: false,
    release: '/static/duliang/weixin/apps/'+user+'/$0'
})


fis.match('::packager', {

    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true // ��Դӳ�����Ƕ
    }),
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })


}).match('**/*.{css,scss}', {
    packTo: '/static/pkg/all.css' //css���һ����
})

fis.match("/static/**/*.*",{
    useHash:false,
    release:"/static/duliang/weixin/apps/"+user+"/$0"
})

//����������CSS��JSѹ���ϲ�
//ʹ�÷��� fis3 release prod
fis.media('prod')
    .match('**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('component_modules/*.js',{
        packTo: '/static/pkg/common.js'
    })
    .match('components/**/*.js',{
        packTo: '/static/pkg/app.js'
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    });