<?php
namespace Subreddit\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Subreddit")
*/
class Subreddit
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_subreddit;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $sobre;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $banner;

    /**
    * @ORM\Column(type="string", length=60)
    *
    * @var string
    */
    private $nome;
}
