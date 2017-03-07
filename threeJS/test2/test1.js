window.onload=function(){
    //基础
    //html中定义了canvas 实例化渲染器
    var renderer = new THREE.WebGLRenderer({
        canvas:document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000);//清除背景
    //实例化场景
    var scene = new THREE.Scene();
    //定义照相机
    var camera = new THREE.PerspectiveCamera(45, 700 / 600, 1, 10);
    camera.position.set(1,5,9);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    //添加环境光
   var light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0, 1.5, 2);
scene.add(light);
    var greenCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
        new THREE.MeshLambertMaterial({color: 0x00ff00}));
        greenCube.position.x = 3;
        scene.add(greenCube);

        var whiteCube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
                new THREE.MeshLambertMaterial({color: 0xffffff}));
        whiteCube.position.x = -3;
        scene.add(whiteCube);

    //渲染
    renderer.render(scene,camera);
}