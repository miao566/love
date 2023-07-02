<!DOCTYPE html>
<html>
<head>
    <title>卡密生成器</title>
</head>
<body>
    <h1>4399</h1>
    <p id="cardCode"><?php echo getRandomCode(); ?></p>

    <?php
    function getRandomCode() {
        // 卡密存储在文本文件中
        $filename = "cardCodes.txt";

        // 从文件中读取卡密列表
        $cardCodes = file($filename, FILE_IGNORE_NEW_LINES);

        if (count($cardCodes) > 0) {
            // 获取访问者的 IP 地址
            $visitorIP = $_SERVER['REMOTE_ADDR'];

            // 判断当前 IP 是否已经获得过卡密
            if (!in_array($visitorIP, $cardCodes)) {
                // 生成一个随机的索引
                $randomIndex = rand(0, count($cardCodes) - 1);
                // 获取随机的卡密
                $randomCode = $cardCodes[$randomIndex];

                // 在页面上显示卡密
                echo $randomCode;

                // 从卡密列表中移除已使用的卡密
                unset($cardCodes[$randomIndex]);

                // 将更新后的卡密列表写回文件
                file_put_contents($filename, implode("\n", $cardCodes));
            } else {
                echo "没有小号了";
            }
        } else {
            echo "没有小号了";
        }
    }
    ?>
</body>
</html>
