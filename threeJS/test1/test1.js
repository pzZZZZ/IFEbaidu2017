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
    camera.position.set(4,2,5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    var cube = new THREE.Mesh(new THREE.CubeGeometry(3, 1, 1),

        new THREE.MeshBasicMaterial({
            color: 0xcccccc
        })
);
scene.add(cube);
        var c1 = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.1, 12, 18),
        
        new THREE.MeshBasicMaterial({
            color: 0xdddddd

        })

);
          c1.position.set(-0.5,-0.2,1);
scene.add(c1);
        var c2 = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.1, 12, 18),
        
        new THREE.MeshBasicMaterial({
            color: 0xdddddd

        })

);
          c2.position.set(1.2,-0.2,1);
scene.add(c2);
    //渲染
    renderer.render(scene,camera);
}