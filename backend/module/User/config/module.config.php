<?php

declare(strict_types=1);

namespace User;

use Laminas\Router\Http\Literal;
use Laminas\Router\Http\Segment;
use Laminas\ServiceManager\Factory\InvokableFactory;

return [
    'router' => [
        'routes' => [
            'createUser' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/user/create[/:action]',
                    'defaults' => [
                        'controller' => Controller\UserController::class,
                        'action'     => 'create',
                    ],
                ],
            ],
        ],
    ],
    'controllers' => [
        'factories' => [
            Controller\UserController::class => InvokableFactory::class,
        ],
    ],
    'view_manager' => [
        'template_map' => [
            'user/create'        => __DIR__ . '/../view/User/User/create.phtml',
        ],
        'template_path_stack' => [
            'User' => __DIR__ . '/../view',
        ],
        'strategies' => array(
            'ViewJsonStrategy'
        )
    ],
];
