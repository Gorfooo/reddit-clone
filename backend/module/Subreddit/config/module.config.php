<?php

declare(strict_types=1);

namespace Subreddit;

use Laminas\Router\Http\Literal;
use Laminas\Router\Http\Segment;
use Laminas\ServiceManager\Factory\InvokableFactory;

return [
    'router' => [
        'routes' => [
            'createSubreddit' => [
                'type'    => Literal::class,
                'options' => [
                    'route'    => '/subreddit/create',
                    'defaults' => [
                        'controller' => Controller\SubredditController::class,
                        'action'     => 'create',
                    ],
                ],
            ],
        ],
    ],
    'controllers' => [
        'factories' => [
            Controller\SubredditController::class => InvokableFactory::class,
        ],
    ],
    'view_manager' => [
        'template_map' => [
            'subreddit/create'        => __DIR__ . '/../view/Subreddit/Subreddit/create.phtml',
        ],
        'template_path_stack' => [
            'Subreddit' => __DIR__ . '/../view',
        ],
    ],
];
