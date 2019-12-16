window.onload = function() {

    // CanvasJS.addColorSet("colortheme",
    //     [ //colorSet Array
    //
    //         "#61988e",
    //         // "#22333b",
    //         "#eae0d5",
    //         "#c6ac8f",
    //         "#5e503f"
    //     ]);
    //
    // var text = "function";
    // var chart = new CanvasJS.Chart("information_chart", {
    //     // theme: "dark2",
    //     backgroundColor: "#22333b",
    //     colorSet: "colortheme",
    //     // exportFileName: "Efficency",
    //     // exportEnabled: true,
    //     animationEnabled: true,
    //     title: {
    //
    //
    //         text: "Efficency",
    //         fontColor: "#eae0d5",
    //     },
    //     legend: {
    //         cursor: "pointer",
    //         itemclick: explodePie
    //     },
    //     toolTip: {
    //         fontColor: "#22333b",
    //         Content: "<b>{name}</b>: ${y} (#percent%)",
    //     },
    //     subtitles: [{
    //         fontColor: "#eae0d5",
    //         text: "Efficency",
    //         // Content: "<b>{name}</b>: ${y} (#percent%)",
    //         verticalAlign: "center",
    //         fontSize: 24,
    //         dockInsidePlotArea: true
    //     }],
    //     data: [{
    //         type: "doughnut",
    //         innerRadius: 100,
    //         // showInLegend: true,
    //
    //         toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
    //         // indexLabel: "{name} - #percent%",
    //         dataPoints: [{
    //                 y: 450,
    //                 name: "Food"
    //             },
    //             {
    //                 y: 120,
    //                 name: "Insurance"
    //             },
    //             {
    //                 y: 300,
    //                 name: "Travelling"
    //             },
    //             {
    //                 y: 800,
    //                 name: "Housing"
    //             },
    //             {
    //                 y: 150,
    //                 name: "Education"
    //             },
    //             {
    //                 y: 150,
    //                 name: "Shopping"
    //             },
    //             {
    //                 y: 250,
    //                 name: "Others"
    //             }
    //         ]
    //     }]
    // });
    //
    // chart.render();
    //
    // function explodePie(e) {
    //     if (typeof(e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
    //         e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    //     } else {
    //         e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    //     }
    //     e.chart.render();
    // }
}

function toggle_dark_mode() {

}

function add1() {
    console.log("clicked");
    candy_list[0].amount += 1;
    console.log(candy_list[0].amount);
}

function shrink(input) {
    console.log("clicked");
    $(input).siblings().slideToggle("fast");

}


function candy(name, desc, price_per_gram, unlock_cost, factory, unit, optimisation, optimisation1) {
    this.name = name;
    this.desc = desc;
    this.price_per_gram = price_per_gram;
    this.amount = 0;
    this.total_sold = 0;
    this.visibility = false;
    this.unlock_cost = unlock_cost;
    this.factory_amount = 0;
    this.factory = factory;
    // this.next_cost_per = factory.base_cost_per * (this.factory_amount +1) * factory.price_multiplier;
    this.unit = `g`;
    this.unlock_visibility = false;
    this.optimisations = [optimisation, optimisation1];
    this.optimisations_multiplier = 1;
    this.production_total = (base_production, multiplier) => base_production * multiplier;
    this.production = this.production_total(this.factory.base_production, this.optimisations_multiplier);
    this.deduction = 0;
}

function factory(base_cost_per, price_multiplier, base_production, desc) {
    this.base_cost_per = base_cost_per;
    this.price_multiplier = price_multiplier;
    this.base_production = base_production;
    this.desc = desc;
}

function optimisation(price, multiplier) {
    this.price = price;
    this.multiplier = multiplier;
    this.unlocked = false;
}

// function purchase(cost){
//
//     //returns true if enough money
//
//     //returns false if not enought money
// }


let create_candy_list = () => {
    return [
        new candy(`Raisans`, `default`, 4.2, 0,
            new factory(15, 1.12, 0.2, `default`), `g`,
            new optimisation(500, 1.3),
            new optimisation(6500, 1.5)
        ),
        new candy(`Suger Kanes`, `default`, 6, 2000,
            new factory(1150, 1.15, 0.3, `default`), `g`,
            new optimisation(5000, 1.5),
            new optimisation(25000, 1.5)

        ),
        new candy(`Jelly Stomach`, `default`, 10, 7000,
            new factory(1000, 1.2, 0.5, `default`), `g`,
            new optimisation(40000, 1.5),
            new optimisation(130000, 1.5)

        ),
        new candy(`Tootsie Cynliders`, `default`, 15, 20000,
            new factory(2500, 1.21, 0.4, `default`), `g`,
            new optimisation(75000, 1.6),
            new optimisation(190000, 1.5)

        ),
        new candy(`m&ns`, `default`, 20, 40000,
            new factory(5000, 1.22, 0.5, `default`), `g`,
            new optimisation(80000, 1.5),
            new optimisation(120000, 1.5)

        ),
        new candy(`Mantos`, `default`, 30, 75000,
            new factory(10000, 1.23, 0.5, `default`), `g`,
            new optimisation(145000, 1.5),
            new optimisation(280000, 1.45)

        ),
        new candy(`Skettles`, `default`, 40, 90000,
            new factory(20000, 1.24, 0.4, `default`), `g`,
            new optimisation(190000, 1.5),
            new optimisation(550000, 1.7)

        ),
        new candy(`Chuppa chups`, `default`, 50, 120000,
            new factory(30000, 1.25, 0.5, `default`), `g`,
            new optimisation(210000, 1.5),
            new optimisation(750000, 1.7)

        ),
        new candy(`Snackers`, `default`, 60, 180000,
            new factory(40000, 1.26, 0.4, `default`), `g`,
            new optimisation(285000, 1.5),
            new optimisation(1000000, 1.6)

        ),
        new candy(`Pac man Dots`, `default`, 70, 250000,
            new factory(50000, 1.27, 0.25, `default`), `g`,
            new optimisation(350000, 1.3),
            new optimisation(1500000, 1.8)

        ),
        new candy(`Hairybro gumies`, `default`, 240, 5500000,
            new factory(700000, 1.28, 0.16, `default`), `g`,
            new optimisation(14500000, 1.5),
            new optimisation(28000000, 1.5)

        ),
        new candy(`Square Sweets that look round`, `default`, 666.67, 15000000,
            new factory(2500000, 1.23, 0.08, `default`), `g`,
            new optimisation(45000000, 1.4),
            new optimisation(75000000, 1.7)

        ),
        new candy(`Chocolate River`, `default`, 3400, 95000000,
            new factory(5000000, 1.3, 0.04, `default`), `g`,
            new optimisation(78500000, 1.5),
            new optimisation(275000000, 1.6)

        ),
        new candy(`Warming toffies`, `default`, 11250, 465000000,
            new factory(12000000, 1.31, 0.02, `default`), `g`,
            new optimisation(160000000, 1.6),
            new optimisation(575000000, 1.7)

        ),
        new candy(`Everlasting gobstoppers`, `default`, 63250, 1200000000,
            new factory(35000000, 1.31, 0.015, `default`), `g`,
            new optimisation(575000000, 1.6),
            new optimisation(2012500000, 1.5)

        ),
        new candy(`Wonka bar`, `default`, 270000, 4840000000,
            new factory(75000000, 1.32, 0.01, `default`), `g`,
            new optimisation(2575000000, 1.5),
            new optimisation(7900000000, 1.6)

        ),
    ]
};
let candy_list = create_candy_list();
candy_list[0].visibility = true;
candy_list[0].factory_amount = 1;
candy_list[0].unlock_visibility = false;
const money = 0;



function shop(name, default_selected) {

    this.name = name;

    this.margin_base = 1;
    this.margin_multi = 1;
    this.margin_total = (margin_base, margin_multi) => margin_base * margin_multi;
    this.margin = this.margin_total(this.margin_base, this.margin_multi);


    this.volume_base = 1.7;
    this.volume_multi = 1;
    this.volume_total = (volume_base, volume_multi) => volume_base * volume_multi;

    this.volume = this.volume_total(this.volume_base, this.volume_multi);
    this.volume_actual = 0;


    this.selected_product = default_selected;
    this.selected_product_ratio = 50;
    this.selected_product_selling = 0;
    this.total_money_earned = 0;
    this.money_per_second = 0;
    // this.upgrades = shop_upgrades();
    this.upgrades = [
        new shop_upgrade('Janitor', 'A clean store somehow convinces people to pay more for candy', 150, 1, 1.1, '+10% margin'),
        new shop_upgrade('Restocker', 'Seems like when the store gets restocked theres always more space to sell stuff!', 600, 1.1, 1, '+10% volume'),
        new shop_upgrade('Neon sign', 'Nothing drives traffice more then a big sign.', 25000, 1.2, 1, '+20% volume'),
        new shop_upgrade('Interior designer', 'Expect plant placement is the key to success', 5000, 1, 1.2, '+20% margin'),
        new shop_upgrade('Pr Manager', 'Manage the hype for your chain!', 150000, 1, 1.2, '+20% margin'),
        new shop_upgrade('TV advertising', 'Another annoying TV ad that wont go away', 575000, 1.3, 1, '+30% volume'),
        new shop_upgrade('Product placement', 'When Tony Stank and Captain Americano is enjoying your candy, everyone enjoys your candy', 5460000, 1.8, 1, '+80% volume'),
        new shop_upgrade('Brainwashing', 'Candyyyyyyyyyyyyy', 21630000, 1, 1.3, '+30% margin'),
    ];

}

function shop_upgrade(name, tooltip, price, volume_mod, margin_mod, synopsis) {
    this.name = name;
    this.tooltip = tooltip;
    this.price = price;
    this.volume_mod = volume_mod;
    this.margin_mod = margin_mod;
    this.synopsis = synopsis;
    this.unlocked = false;
}
let shop_upgrades = () => {
    return [
        new shop_upgrade('Janitor', 'A clean store somehow convinces people to pay more for candy', 150, 1, 1.1, '+10% margin'),
        new shop_upgrade('Restocker', 'Seems like when the store gets restocked theres always more space to sell stuff!', 600, 1.1, 1, '+10% volume'),
        new shop_upgrade('Neon sign', 'Nothing drives traffice more then a big sign.', 25000, 1.2, 1, '+20% volume'),
        new shop_upgrade('Interior designer', 'Expect plant placement is the key to success', 5000, 1, 1.2, '+20% margin'),
        new shop_upgrade('Pr Manager', 'Manage the hype for your chain!', 150000, 1, 1.2, 0, '+20% margin'),
        new shop_upgrade('TV advertising', 'Another annoying TV ad that wont go away', 575000, 1.3, 1, '+30% volume'),
        new shop_upgrade('Product placement', 'When Tony Stank and Captain Americano is enjoying your candy, everyone enjoys your candy', 5460000, 1.8, 1, '+80% volume'),
        new shop_upgrade('Brainwashing', 'Candyyyyyyyyyyyyy', 21630000, 1, 1.3, '+30% margin'),
    ]
};

let create_shop_list = () => {
    return [
        new shop("Shop"),
    ]

};
let shop_list = create_shop_list();






function formatMoney(input) {
    if (!input) input = 0;
    if (input >= 1000000000000)
        return '$' + (input / 1000000000000).toFixed(2) + 'T';
    if (input >= 1000000000)
        return '$' + (input / 1000000000).toFixed(2) + 'B';
    if (input >= 1000000)
        return '$' + (input / 1000000).toFixed(2) + 'M';
    if (input >= 1000)
        return '$' + (input / 1000).toFixed(2) + 'K';

    return '$' + input.toFixed(1);
}


angular.module("Candy_tycoon", [])

    .filter('money', function() {
        return formatMoney;
    })
    // copyed from datastack
    .filter('weight', function() {
        return function(input) {
            if (input === null) {
                return 0;
            }
            if (input >= 1000)
                return (input / 1000).toFixed(2) + 'kg';

            return input.toFixed(2) + "g";
        };
    })

    .controller("get_names", ['$scope', '$document', '$window', '$sce', '$interval', '$timeout', '$animate', function($scope, $document, $window, $sce, $interval, $timeout, $animate) {
        let time = 0;
        let lastUpdate = 0;
        let refresh_rate = 230;
        let time_scale = refresh_rate / 1000;
        $scope.candies = candy_list;
        $scope.interval = $interval(update, refresh_rate);
        //seconds passed
        $scope.time_unrounded = time;
        $scope.time = time;
        $scope.money = 0;
        $scope.auto_save = $interval(writeToCookie, 10000);
        $scope.total_money = $scope.money;
        $scope.shop_list = shop_list;
        $scope.shop_list[0].selected_product = $scope.candies[0];
        $scope.candy_selected = $scope.candies[0];
        $scope.main_product_percentage;
        $scope.dps = [];




        CanvasJS.addColorSet("colortheme",
            [ //colorSet Array

                "#61988e",
                // "#22333b",
                "#eae0d5",
                "#c6ac8f",
                "#5e503f"
            ]);
        $scope.chart = new CanvasJS.Chart("information_chart", {
            // theme: "dark2",
            backgroundColor: "#22333b",
            colorSet: "colortheme",
            // exportFileName: "Efficency",
            // exportEnabled: true,
            animationEnabled: true,
            title: {


                text: "Efficency",
                fontColor: "#eae0d5",
            },
            // legend: {
            //     cursor: "pointer",
            //     itemclick: explodePie
            // },
            toolTip: {
                fontColor: "#22333b",
                Content: "<b>{name}</b>: ${y} (#percent%)",
            },
            subtitles: [{
                fontColor: "#eae0d5",
                text: "Efficency",
                // Content: "<b>{name}</b>: ${y} (#percent%)",
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true,
            }],
            data: [{
                type: "doughnut",
                innerRadius: 90,
                // showInLegend: true,

                toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                // indexLabel: "{name} - #percent%",
                dataPoints: $scope.dps,

            }]

        });


        function explodePie(e) {
            if (typeof(e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
            } else {
                e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
            }
            e.chart.render();
        }








        $scope.chart_update = function() {
            $scope.dps = $scope.candies.map (a=> {
                let holder_object = {};
                holder_object.label = a.name;
                holder_object.y = a.unlock_cost;
                return holder_object;
            }
            );
            // let cost = $scope.candies.map (a=> a.name);
            // var arr = oFullResponse.results.map(obj => ({
            //     key: obj.label,
            //     sortable: true,
            //     resizeable: true
            // }))
            //
            // $scope.dps = $scope.candies;
            // $scope.dps.label = $scope.dps.name;
            // $scope.dps.y = $scope.dps.unlock_cost;
            console.log($scope.dps);

            $scope.chart.render();
        };
        $scope.update_chart = $interval($scope.chart_update, 200);

        $scope.chart.render();




        // $scope.update_chart = function() {
        //     $scope.dps = [];
        //     $scope.candies.forEach(function(candy) {
        //         $scope.dps.push({
        //             label: candy.name,
        //             y: candy.unlock_cost,
        //         })
        //         $scope.chart.render();
        //
        //
        //     });
        // }



        function update() {
            let updateTime = new Date().getTime();
            let timeDiff = (Math.min(1000, Math.max(updateTime - lastUpdate, 0))) / 1000;
            $scope.time_unrounded += timeDiff;
            // console.log(time);
            $scope.time = $scope.time_unrounded.toFixed(0);


            time_passed(updateTime, timeDiff);

        }

        function time_passed(updateTime, timeDiff) {
            lastUpdate = updateTime;
            //if enabled
            //producing = factory amount * production
            //producing * timeDiff += amount

            //check unlocks

            $scope.candies.forEach(function(candy) {
                if (candy.visibility) {
                    candy.amount += candy.factory_amount * candy.production * timeDiff;
                } else if ($scope.total_money > candy.unlock_cost / 2) {
                    candy.unlock_visibility = true;
                };
                //reset deduction
                candy.deduction = 0;
            });
            //shop math
            $scope.shop_list.forEach(function(shop) {
                let shop_volume_this_loop = shop.volume * timeDiff;
                shop.money_per_second = 0;
                let visible_candies = $scope.candies.filter(function(candy) {
                    if (candy.visibility) {
                        return candy;
                    }
                });
                shop.volume_actual = (shop_volume_this_loop / timeDiff);
                //cal volume% first
                // console.log(shop.volume);
                let main_product_volume = ((shop_volume_this_loop) / 100) * shop.selected_product_ratio;
                // console.log(main_product_volume);
                let remaining_product_volume_total = Math.max(0, (shop_volume_this_loop) - main_product_volume);
                // console.log(remaining_product_volume_total);

                let remaining_product_volume = remaining_product_volume_total / (visible_candies.length - 1);
                // console.log (remaining_product_volume);


                $scope.candies.forEach(function(candy) {

                    if (candy.visibility) {

                        if (candy.name == shop.selected_product.name) {

                            // candy.amount - main_product_volume
                            sell_by_volume(main_product_volume);

                        } else {
                            sell_by_volume(remaining_product_volume);
                        }


                    }

                    function sell_by_volume(volume_set) {
                        let product_deduced = 0;
                        product_deduced = clamp(volume_set, 0, candy.amount);

                        //per second
                        candy.deduction += volume_set / timeDiff;
                        //timed
                        candy.amount -= product_deduced;
                        //timed
                        candy.total_sold += (product_deduced) * shop.margin * candy.price_per_gram;
                        //timed
                        $scope.money += product_deduced * shop.margin * candy.price_per_gram;

                        $scope.total_money += product_deduced * shop.margin * candy.price_per_gram;

                        shop.money_per_second += (product_deduced * shop.margin * candy.price_per_gram) / timeDiff;

                    }
                });


            });
        }



        function clamp(x, a, b) {
            return x < a ? a : x > b ? b : x
        }

        $scope.purchase_factory = function(candy) {
            if (purchase(candy.factory.base_cost_per * (candy.factory_amount + 1) * candy.factory.price_multiplier)) {
                candy.factory_amount++;
            };

        }
        $scope.sellall = function() {
            let total = 0;
            $scope.candies.forEach(function(candy) {
                total += candy.amount * candy.price_per_gram;
                candy.amount = 0;
            });
            $scope.money += total;
            $scope.total_money += total;
        }
        $scope.unlock = function(candy) {
            console.log("unlock");

            if (purchase(candy.unlock_cost)) {
                candy.unlock_visibility = false;
                candy.visibility = true;
                candy.factory_amount = 1;
            }
        }




        $scope.new_shop = function() {
            // $scope.candies.unlock_cost;
            // console.log(cost_array);
            if ($scope.shop_list.length < $scope.candies.length) {
                $scope.next_shop_price = $scope.candies[$scope.shop_list.length].unlock_cost;
                if (purchase($scope.next_shop_price)) {
                    // console.log($scope.shop_list);
                    $scope.shop_list.push(new shop("default", $scope.candies[0]));
                }
            }

        }

        $scope.unlock_optimisation = function(candy, num) {
            if (purchase(candy.optimisations[num].price)) {
                candy.optimisations[num].unlocked = true;
                candy.optimisations_multiplier += (candy.optimisations[num].multiplier - 1);

                candy.production = candy.factory.base_production * candy.optimisations_multiplier;


            }
        }

        function purchase(item_cost) {
            if (item_cost <= $scope.money) {
                $scope.money -= item_cost;
                return true;
            }
            if (item_cost >= $scope.money) {
                console.log(item_cost);
                return false;
            }
            return false;
        }

        $scope.upgrade = function(shop, upgrade) {

            if (purchase(upgrade.price)) {
                upgrade.unlocked = true;


                shop.volume_multi += (upgrade.volume_mod - 1);
                shop.volume = shop.volume_base * shop.volume_multi;

                shop.margin_multi += (upgrade.margin_mod - 1);

                shop.margin = shop.margin_base * shop.margin_multi;
            }
        }


        $document.ready(function() {
            // $scope.new_shop();
            $scope.next_shop_price = $scope.candies[$scope.shop_list.length].unlock_cost;
            // readFromCookie();
            // writeToCookie();

        });

        function readFromCookie() {

            if (typeof(Storage) == "undefined") {
                return;
            }

            try {
                if (localStorage.getItem("save_data") !== null) {
                    let save_data = JSON.parse(localStorage.getItem("save_data"));
                    $scope.money = save_data.money;
                    $scope.total_money = save_data.total_money;
                    $scope.candies = save_data.production;
                    $scope.shop_list = save_data.shops;

                }
            } catch (e) {
                console.log(e);
            }
        }
        $scope.manualsave = function() {
            writeToCookie();
        }

        function writeToCookie() {
            if (typeof(Storage) == "undefined") {
                return;
            }


            let save_data = {
                date: Date.now(),
                money: $scope.money,
                total_money: $scope.total_money,
                production: $scope.candies,
                shops: $scope.shop_list,
            };

            try {
                localStorage.setItem("save_data", JSON.stringify(save_data));
                console.log("saved");
            } catch (e) {

            }

        }



    }]);





// --allow-file-access-from-files
