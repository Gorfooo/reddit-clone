<?php
namespace Reddit\Posts\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Post_Acoes")
*/
class PostAcoes
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_post_acoes;

    /**
    * @ORM\ManyToOne(targetEntity="Post", inversedBy="id_post_acoes")
    * @ORM\JoinColumn(name="id_post", referencedColumnName="id_post", nullable=false)
    */
    private $id_post;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_post_acoes")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $compartilhado;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $ocultado;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $guardado;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $premiado;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $like_dislike;

    /**
    * @ORM\Column(type="date")
    */
    private $like_dislike_date;

    /**
     * Get idPostAcoes.
     *
     * @return int
     */
    public function getIdPostAcoes()
    {
        return $this->id_post_acoes;
    }

    /**
     * Set compartilhado.
     *
     * @param string $compartilhado
     *
     * @return PostAcoes
     */
    public function setCompartilhado($compartilhado)
    {
        $this->compartilhado = $compartilhado;

        return $this;
    }

    /**
     * Get compartilhado.
     *
     * @return string
     */
    public function getCompartilhado()
    {
        return $this->compartilhado;
    }

    /**
     * Set ocultado.
     *
     * @param string $ocultado
     *
     * @return PostAcoes
     */
    public function setOcultado($ocultado)
    {
        $this->ocultado = $ocultado;

        return $this;
    }

    /**
     * Get ocultado.
     *
     * @return string
     */
    public function getOcultado()
    {
        return $this->ocultado;
    }

    /**
     * Set guardado.
     *
     * @param string $guardado
     *
     * @return PostAcoes
     */
    public function setGuardado($guardado)
    {
        $this->guardado = $guardado;

        return $this;
    }

    /**
     * Get guardado.
     *
     * @return string
     */
    public function getGuardado()
    {
        return $this->guardado;
    }

    /**
     * Set premiado.
     *
     * @param string $premiado
     *
     * @return PostAcoes
     */
    public function setPremiado($premiado)
    {
        $this->premiado = $premiado;

        return $this;
    }

    /**
     * Get premiado.
     *
     * @return string
     */
    public function getPremiado()
    {
        return $this->premiado;
    }

    /**
     * Set likeDislike.
     *
     * @param string $likeDislike
     *
     * @return PostAcoes
     */
    public function setLikeDislike($likeDislike)
    {
        $this->like_dislike = $likeDislike;

        return $this;
    }

    /**
     * Get likeDislike.
     *
     * @return string
     */
    public function getLikeDislike()
    {
        return $this->like_dislike;
    }

    /**
     * Set likeDislikeDate.
     *
     * @param \DateTime $likeDislikeDate
     *
     * @return PostAcoes
     */
    public function setLikeDislikeDate($likeDislikeDate)
    {
        $this->like_dislike_date = $likeDislikeDate;

        return $this;
    }

    /**
     * Get likeDislikeDate.
     *
     * @return \DateTime
     */
    public function getLikeDislikeDate()
    {
        return $this->like_dislike_date;
    }

    /**
     * Set idPost.
     *
     * @param \Reddit\Posts\Model\Post $idPost
     *
     * @return PostAcoes
     */
    public function setIdPost(\Reddit\Posts\Model\Post $idPost)
    {
        $this->id_post = $idPost;

        return $this;
    }

    /**
     * Get idPost.
     *
     * @return \Reddit\Posts\Model\Post
     */
    public function getIdPost()
    {
        return $this->id_post;
    }

    /**
     * Set idUsuario.
     *
     * @param \Reddit\Usuario\model\Usuario $idUsuario
     *
     * @return PostAcoes
     */
    public function setIdUsuario(\Reddit\Usuario\model\Usuario $idUsuario)
    {
        $this->id_usuario = $idUsuario;

        return $this;
    }

    /**
     * Get idUsuario.
     *
     * @return \Reddit\Usuario\model\Usuario
     */
    public function getIdUsuario()
    {
        return $this->id_usuario;
    }
}
