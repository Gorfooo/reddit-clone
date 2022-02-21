<?php

declare(strict_types=1);

namespace Post;

use Laminas\Router\Http\Literal;
use Laminas\Router\Http\Segment;
use Laminas\ServiceManager\Factory\InvokableFactory;

return [
    'router' => [
        'routes' => [
            'createPost' => [
                'type'    => Literal::class,
                'options' => [
                    'route'    => '/post/create',
                    'defaults' => [
                        'controller' => Controller\PostController::class,
                        'action'     => 'create',
                    ],
                ],
            ],
        ],
    ],
    'controllers' => [
        'factories' => [
            Controller\PostController::class => InvokableFactory::class,
        ],
    ],
    'view_manager' => [
        'template_map' => [
            'post/create'        => __DIR__ . '/../view/Post/Post/create.phtml',
        ],
        'template_path_stack' => [
            'Post' => __DIR__ . '/../view',
        ],
    ],
];
