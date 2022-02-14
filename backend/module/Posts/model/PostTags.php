<?php
namespace Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post_Tags")
*/
class PostTags
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_tag;

    /**
    * @ORM\Column(type="string", length=150)
    *
    * @var string
    */
    private $id_post;
}
